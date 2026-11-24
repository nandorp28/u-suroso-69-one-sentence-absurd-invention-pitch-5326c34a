// One-Sentence Absurd Invention Pitch
// Entry for make.fun bounty u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a
// Writes exactly one sentence (<=220 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My doormat got tired of muddy shoes, so now it flips over at the door and wipes its feet on you instead.";

function main(): void {
  const line = ENTRY.trim();
  if (line.length < 1 || line.length > 220) {
    throw new Error(`entry must be 1-220 characters, got ${line.length}`);
  }
  if (/\s/.test(line) === false && line.length > 1) {
    throw new Error("entry must be a sentence, not a single token");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // One sentence, one line: no trailing newline, so the entry is exactly
  // the 104 characters the judge reads.
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

main();
