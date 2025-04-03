import typescript from '@rollup/plugin-typescript';
import { createRequire } from 'module';
import generatePackageJson from 'rollup-plugin-generate-package-json';

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
        main: './index.cjs',
        module: './index.mjs',
        types: './index.d.ts',
        author: pkg.author,
        license: pkg.license,
        repository: pkg.repository,
        peerDependencies: pkg.peerDependencies,
        dependencies: pkg.dependencies,
        sideEffects: false,
        homepage: pkg.homepage,
        files: ["*"]
      }
    })
  ]
};