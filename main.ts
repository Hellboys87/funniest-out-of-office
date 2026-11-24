// Entry: one line of out-of-office auto-reply.
// The laptop is on a beach; the human is not. Both are technically out.
const { mkdirSync, writeFileSync } = require("node:fs");
const LINE =
  "I'm away until Monday. My laptop is on a beach; I am not. We are both technically out of the office.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
