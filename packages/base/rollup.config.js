import typescript from '@rollup/plugin-typescript';
import { createRequire } from 'module';
import generatePackageJson from 'rollup-plugin-generate-package-json';

// Create require function for JSON import
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
  /@babel\/runtime/
];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
    }
  ],
  external,
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    generatePackageJson({
      inputFolder: '.',
      baseContents: {
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        main: './index.cjs',  // Changed to match your output file
        module: './index.mjs', // Changed to match your output file
        types: './index.d.ts', // Added TypeScript types
        author: pkg.author,
        license: pkg.license,
        repository: pkg.repository,
        peerDependencies: pkg.peerDependencies,
        dependencies: pkg.dependencies,
        sideEffects: false,
        homepage: pkg.homepage,
        files: ["*"]  // Added to ensure all dist files are included
      }
    })
  ]
};