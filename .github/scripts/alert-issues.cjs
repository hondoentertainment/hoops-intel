// Shared helpers for the automated failure-alert issues that the content and
// deploy workflows file against themselves.
//
// These were previously copy-pasted into each workflow's `github-script` block
// and drifted: daily/midday/weekly closed their issues once the next run went
// green, while deployment-smoke, health-check and ops-readiness never closed
// anything. Failures from June (#154, #159, #165) were still open in August
// alongside 50+ never-closed site-review reports, which buried the alerts that
// mattered — nobody reads a label with 60 open issues on it.
//
// Consumed from a workflow with:
//   const alerts = require(`${process.env.GITHUB_WORKSPACE}/.github/scripts/alert-issues.cjs`);

// GitHub silently drops assignees that lack push access (201, empty assignees)
// and 422s on an org login, so a failed assignment must never fail the step —
// filing the issue is the part that matters.
async function assignAlert(github, context, core, issueNumber) {
  const assignee = process.env.ALERT_ASSIGNEE;
  if (!assignee) return;
  try {
    await github.rest.issues.addAssignees({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: issueNumber,
      assignees: [assignee],
    });
  } catch (err) {
    core.info(`Could not assign ${assignee} to #${issueNumber}: ${err.message || err}`);
  }
}

// Files one issue per label per day. Returns the issue number, or null when an
// open issue with the same title already exists.
async function openFailureIssue(github, context, core, { title, body, label }) {
  const existing = await github.rest.issues.listForRepo({
    owner: context.repo.owner,
    repo: context.repo.repo,
    state: 'open',
    labels: label,
    per_page: 100,
  });
  if (existing.data.some((i) => i.title === title)) {
    core.notice(`Issue already open: ${title} — skip`);
    return null;
  }
  const created = await github.rest.issues.create({
    owner: context.repo.owner,
    repo: context.repo.repo,
    title,
    body,
    labels: [label, 'automated'],
  });
  await assignAlert(github, context, core, created.data.number);
  return created.data.number;
}

// Closes every open issue carrying `label` whose title starts with
// `titlePrefix`. Called from the success path so a recovered workflow clears
// its own backlog instead of leaving it for a human to notice.
async function closeResolvedIssues(github, context, core, { label, titlePrefix, note }) {
  const open = await github.rest.issues.listForRepo({
    owner: context.repo.owner,
    repo: context.repo.repo,
    state: 'open',
    labels: label,
    per_page: 100,
  });
  const stale = open.data.filter((i) => i.title.startsWith(titlePrefix));
  for (const issue of stale) {
    await github.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: issue.number,
      body: note,
    });
    await github.rest.issues.update({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: issue.number,
      state: 'closed',
      state_reason: 'completed',
    });
  }
  if (stale.length) core.notice(`Closed ${stale.length} resolved ${label} issue(s)`);
  return stale.length;
}

module.exports = { assignAlert, openFailureIssue, closeResolvedIssues };
