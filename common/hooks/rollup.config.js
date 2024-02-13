const typescript = require('@rollup/plugin-typescript')
const commonjs = require('@rollup/plugin-commonjs')
const nodeResolve = require('@rollup/plugin-node-resolve')
const external = require('rollup-plugin-peer-deps-external')
const babel = require('@rollup/plugin-babel').default
const fs = require('fs')
const path = require('path')

const options = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.es.js',
      format: 'es'
    }
  ],
  plugins: [
    external(),
    {
      name: 'Erase Dist',
      buildStart() {
        fs.rmSync(path.resolve('dist'), { recursive: true, force: true })
      }
    },
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    typescript({
      module: 'esnext',
      declaration: true,
      declarationDir: './dist'
    })
  ],
  external: ['react', 'react-dom']
}

module.exports = options
