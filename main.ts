import { writeFileSync, mkdirSync } from "node:fs";

// One line for make.fun's Make the Judge Smile bounty.
// A small good thing that happened today, written to /output/entry.txt.
const line =
  "The old man at the warung tucked an extra krupuk into my bag and whispered, 'for the road, son' — I am thirty-four.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
