import { test } from "node:test";
import assert from "node:assert/strict";
import {
  TEAM_ABBR_SET,
  canonicalNbaAbbrev,
  dropNonNbaMatchupObjects,
  isNbaFranchiseAbbrev,
  stampCanonicalTeamAbbrevs,
} from "../lib/content-quality-constants.mjs";

test("canonicalNbaAbbrev remaps ESPN Wizards/Nets aliases", () => {
  assert.equal(canonicalNbaAbbrev("WSH"), "WAS");
  assert.equal(canonicalNbaAbbrev("wsh"), "WAS");
  assert.equal(canonicalNbaAbbrev("BKN"), "BRK");
  assert.equal(canonicalNbaAbbrev("NY"), "NYK");
  assert.equal(canonicalNbaAbbrev("WAS"), "WAS");
  assert.ok(TEAM_ABBR_SET.has(canonicalNbaAbbrev("WSH")));
});

test("stampCanonicalTeamAbbrevs remaps WSH in pulse fields and gameIds", () => {
  const src = `export const gameResults = [{gameId:"DET-WSH-20261010",homeTeam:"WSH",awayTeam:"DET",homeScore:110,awayScore:104}];
export const injuryUpdates = [{player:"Alex Sarr",team:"WSH",status:"Out"}];
`;
  const stamped = stampCanonicalTeamAbbrevs(src);
  assert.match(stamped, /homeTeam:\s*"WAS"/);
  assert.match(stamped, /team:\s*"WAS"/);
  assert.match(stamped, /gameId:\s*"DET-WAS-20261010"/);
  assert.doesNotMatch(stamped, /WSH/);
});

test("stampCanonicalTeamAbbrevs leaves prose mentioning Wizards alone", () => {
  const src = `export const narrative = {lede:"Washington Wizards host Detroit."};`;
  assert.equal(stampCanonicalTeamAbbrevs(src), src);
});

test("isNbaFranchiseAbbrev rejects exhibition clubs after alias remap", () => {
  assert.equal(isNbaFranchiseAbbrev("LON"), false);
  assert.equal(isNbaFranchiseAbbrev("WSH"), true);
  assert.equal(isNbaFranchiseAbbrev("POR"), true);
});

test("dropNonNbaMatchupObjects removes London Lions previews and keeps NBA games", () => {
  const src = `export const gamePreviews = [{gameId:"LON-POR-20261012",homeTeam:"POR",awayTeam:"LON",time:"4:00 PM ET"},{gameId:"OKC-ATL-20261012",homeTeam:"ATL",awayTeam:"OKC",time:"7:00 PM ET"}];`;
  const next = dropNonNbaMatchupObjects(src);
  assert.doesNotMatch(next, /LON/);
  assert.match(next, /OKC-ATL-20261012/);
  assert.match(next, /gamePreviews = \[/);
});
