import { describe, it, expect, beforeEach } from "vitest";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const require = createRequire(import.meta.url);
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const alerts = require(join(ROOT, ".github", "scripts", "alert-issues.cjs"));

const context = { repo: { owner: "hondoentertainment", repo: "hoops-intel" } };

function fakeGitHub(openIssues = []) {
  const calls = { created: [], comments: [], updates: [], assignees: [], listArgs: [] };
  return {
    calls,
    rest: {
      issues: {
        listForRepo: async (args) => {
          calls.listArgs.push(args);
          return { data: openIssues };
        },
        create: async (args) => {
          calls.created.push(args);
          return { data: { number: 900 + calls.created.length } };
        },
        createComment: async (args) => calls.comments.push(args),
        update: async (args) => calls.updates.push(args),
        addAssignees: async (args) => calls.assignees.push(args),
      },
    },
  };
}

const core = { info: () => {}, notice: () => {}, warning: () => {} };

describe("alert-issues helper", () => {
  beforeEach(() => {
    delete process.env.ALERT_ASSIGNEE;
  });

  it("files an issue and assigns it when ALERT_ASSIGNEE is set", async () => {
    process.env.ALERT_ASSIGNEE = "hondoentertainment";
    const gh = fakeGitHub([]);
    const num = await alerts.openFailureIssue(gh, context, core, {
      label: "deployment-failure",
      title: "Production smoke failed — 2026-08-01",
      body: "boom",
    });

    expect(num).toBe(901);
    expect(gh.calls.created).toHaveLength(1);
    expect(gh.calls.created[0].labels).toEqual(["deployment-failure", "automated"]);
    expect(gh.calls.assignees[0].assignees).toEqual(["hondoentertainment"]);
  });

  it("does not file a duplicate when the same title is already open", async () => {
    const gh = fakeGitHub([{ number: 272, title: "Production smoke failed — 2026-08-01" }]);
    const num = await alerts.openFailureIssue(gh, context, core, {
      label: "deployment-failure",
      title: "Production smoke failed — 2026-08-01",
      body: "boom",
    });

    expect(num).toBeNull();
    expect(gh.calls.created).toHaveLength(0);
  });

  // The dedupe window was per_page: 5, so with five stale issues already open
  // the sixth failure could slip past the duplicate check.
  it("scans a full page of open issues when deduping", async () => {
    const gh = fakeGitHub([]);
    await alerts.openFailureIssue(gh, context, core, { label: "x", title: "t", body: "b" });
    expect(gh.calls.listArgs[0].per_page).toBe(100);
  });

  it("never fails the step when assignment is rejected", async () => {
    process.env.ALERT_ASSIGNEE = "not-a-collaborator";
    const gh = fakeGitHub([]);
    gh.rest.issues.addAssignees = async () => {
      throw new Error("Validation Failed: assignee");
    };

    await expect(
      alerts.openFailureIssue(gh, context, core, { label: "x", title: "t", body: "b" }),
    ).resolves.toBe(901);
    expect(gh.calls.created).toHaveLength(1);
  });

  it("skips assignment entirely when ALERT_ASSIGNEE is unset", async () => {
    const gh = fakeGitHub([]);
    await alerts.openFailureIssue(gh, context, core, { label: "x", title: "t", body: "b" });
    expect(gh.calls.assignees).toHaveLength(0);
  });

  it("closes only matching open issues and leaves others alone", async () => {
    const gh = fakeGitHub([
      { number: 154, title: "Production smoke failed — 2026-06-04" },
      { number: 272, title: "Production smoke failed — 2026-07-27" },
      { number: 273, title: "Weekly generation failed — 2026-07-27" },
    ]);

    const closed = await alerts.closeResolvedIssues(gh, context, core, {
      label: "deployment-failure",
      titlePrefix: "Production smoke failed",
      note: "green again",
    });

    expect(closed).toBe(2);
    expect(gh.calls.updates.map((u) => u.issue_number)).toEqual([154, 272]);
    expect(gh.calls.updates.every((u) => u.state === "closed")).toBe(true);
    expect(gh.calls.updates.every((u) => u.state_reason === "completed")).toBe(true);
    expect(gh.calls.comments.map((c) => c.issue_number)).toEqual([154, 272]);
  });

  it("is a no-op when there is nothing stale to close", async () => {
    const gh = fakeGitHub([{ number: 273, title: "Weekly generation failed — 2026-07-27" }]);
    const closed = await alerts.closeResolvedIssues(gh, context, core, {
      label: "deployment-failure",
      titlePrefix: "Production smoke failed",
      note: "green again",
    });

    expect(closed).toBe(0);
    expect(gh.calls.updates).toHaveLength(0);
  });
});
