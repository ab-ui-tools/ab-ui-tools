import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'
import fs from 'fs'
import path from 'path'
import babel from 'rollup-plugin-babel'
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'))
import generatePackageJson from 'rollup-plugin-generate-package-json'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import { compileString } from 'sass'
import dts from 'vite-plugin-dts'

const extensions = ['.ts', '.tsx', '.js', '.jsx']
const ignoreExtensions = ['.stories.tsx', '.d.ts', '.test.tsx', '.test.ts', 'setupTests.ts']

const externalDeps = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
  'react/jsx-runtime',
  'react/jsx-dev-runtime'
]

const external = (id) =>
  /@babel\/runtime/.test(id) ||
  externalDeps.some((dep) => id === dep || id.startsWith(`${dep}/`))

// create input config for rollup for each folder
const getInputOptions = (localPath = 'src', currentInputOptions = {}) => {
  return fs.readdirSync(path.join(__dirname, localPath)).reduce((initial, current) => {
    if (fs.statSync(path.join(__dirname, `${localPath}/${current}`)).isDirectory()) {
      getInputOptions(`${localPath}/${current}`, initial)
    } else {
      const regexExecResult = /(.+?)(\.[^.]*$|$)/g.exec(current)
      const chunkName = `${localPath}/${regexExecResult[1]}`.replace(/^src\/?/g, '')
      if (
        extensions.includes(regexExecResult[2]) &&
        !ignoreExtensions.some((e) => regexExecResult[0].endsWith(e))
      ) {
        initial[chunkName] = `${localPath}/${current}`
      }
    }
    return initial
  }, currentInputOptions)
}

function writeCSS() {
  return {
    name: 'write-css',
    async generateBundle(_, bundle) {
      const scssFile = bundle['assets/styles/styles.scss']

      if (scssFile) {
        const scssContent = scssFile.source.toString()
        const cssContent = compileString(scssContent).css;

        if (!fs.existsSync('dist/assets/styles')) {
          fs.mkdirSync('dist/assets/styles', { recursive: true })
        }

        const cssFilePath = path.resolve('dist/assets/styles/styles.css')
        fs.writeFileSync(cssFilePath, cssContent)
      }
    }
  }
}

const plugins = [
  json(),
  resolve({ extensions }),
  babel({
    babelrc: true,
    extensions,
    runtimeHelpers: true,
    exclude: 'node_modules/**',
  }),
  commonjs({ include: 'node_modules/**' }),
  postcss({
    plugins: [],
    inject: false,
    extract: 'assets/styles/styles.scss',
    sourceMap: false,
    minimize: true,
    extensions: ['.scss', '.css']
  }),
  copy({
    targets: [
      { src: 'src/assets/images/', dest: 'dist' },
      { src: 'src/assets/styles/helpers/_mixin.scss', dest: 'dist' },
      { src: './README.md', dest: 'dist' }
    ],
    flatten: false
  }),
  image(),
  writeCSS()
]

export default [
  {
    input: getInputOptions(),
    context: 'this',
    output: {
      dir: 'dist',
      assetFileNames: '[name][extname]',
      sourcemap: false
    },
    external,
    plugins: [
      ...plugins,
      dts({
        tsconfigPath: './tsconfig.json'
      }),
      generatePackageJson({
        inputFolder: '.',
        baseContents: (pkg) => ({
          name: pkg.name,
          version: pkg.version,
          description: pkg.description,
          main: './index.js',
          module: './index.js',
          author: pkg.author,
          license: pkg.license,
          repository: pkg.repository,
          peerDependencies: pkg.peerDependencies,
          dependencies: pkg.dependencies,
          sideEffects: false,
          homepage: pkg.homepage
        })
      })
    ]
  }
]
