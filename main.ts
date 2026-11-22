import { mkdirSync, writeFileSync } from "node:fs";

const entry = `Somewhere in the house you know best there is a door you have never opened. Not locked, never noticed, until tonight, when the light beneath it went out and came back on, as if someone beyond it had stopped, listening, wondering whether you would knock first.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
