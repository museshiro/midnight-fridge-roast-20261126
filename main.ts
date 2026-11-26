// Midnight Fridge Roast — make.fun entry
// Writes one roast line for a smart fridge that refuses to open after midnight.
import { mkdirSync, writeFileSync } from "node:fs";

// The turn: the fridge guards its midnight door like a vault, but the
// treasure inside is a sad onion and half a lime. One joke, one target.
const line =
  "At 3 a.m. you lock me out like you're protecting the Crown Jewels, not a sad onion and half a lime—open up, you pompous crisper.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
