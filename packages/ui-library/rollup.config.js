import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'
import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import generatePackageJson from 'rollup-plugin-generate-package-json'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import { renderSync } from 'sass'

const extensions = ['.ts', '.tsx', '.js', '.jsx']
const ignoreExtensions = ['.stories.tsx', '.stories.d.ts']

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
  /@babel\/runtime/
]

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

// custom plugin to generate declaration files
const dtsGenerator = function (options) {
  options = {
    declarationDir: 'dist',
    outDir: 'dts-temp',
    ...(options || {})
  }
  return {
    buildEnd() {
      exec(
        `tsc -d --declarationDir ${options.declarationDir} --outDir ${options.outDir} --project ./tsconfig.json`,
        (err) => {
          if (err) {
            console.log(err)
            throw "Couldn't generate .d.ts files..."
          }
          exec(`rimraf ${options.outDir}`)
          console.log('Declaration files generated successfully')
        }
      )
    }
  }
}

function writeCSS() {
  return {
    name: 'write-css',
    async generateBundle(_, bundle) {
      const scssFile = bundle['assets/styles/styles.scss']

      if (scssFile) {
        const scssContent = scssFile.source.toString()
        const cssContent = renderSync({ data: scssContent }).css.toString()

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
    presets: ['@babel/preset-env']
  }),
  commonjs({ include: 'node_modules/**', requireReturnsDefault: 'auto' }),
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
      dtsGenerator(),
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
