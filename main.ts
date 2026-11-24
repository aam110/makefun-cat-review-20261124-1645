import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "One star. My human dunked me in water, called it love, and now I smell of lavender and betrayal.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
