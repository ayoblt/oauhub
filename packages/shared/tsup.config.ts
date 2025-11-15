import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "types/index": "src/types/index.ts",
    "constants/index": "src/constants/index.ts",
    // "validators/index": "src/validators/index.ts",
  },
  format: ["esm", "cjs"],
  outDir: "dist",
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  treeshake: true,
});
