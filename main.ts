// Fortune in a Pot — one kind, funny fortune for a houseplant,
// at most 120 characters. Writes the fortune to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

const LIMIT = 120;

async function emit(text: string): Promise<number> {
  const chars = [...text].length;
  if (chars < 1 || chars > LIMIT) {
    throw new Error(`fortune is ${chars} chars, must be 1-${LIMIT}`);
  }
  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", text, "utf8");
  return chars;
}

const LINE =
  "Your leaves will turn toward a window you have not met yet, and someone will finally water you on time.";

const n = await emit(LINE);
console.log(`wrote ${n} chars to /output/entry.txt`);
