// packages/base/tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'], // Entry file(s)
  format: ['cjs', 'esm'], // Output formats
  dts: true, // Generate .d.ts files
  clean: true, // Clear dist before build
  minify: false, // Disable minification (for debugging)
  sourcemap: true, // Generate sourcemaps
});
