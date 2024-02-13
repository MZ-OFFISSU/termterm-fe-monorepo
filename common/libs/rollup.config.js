const typescript = require('@rollup/plugin-typescript')
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
    {
      name: 'Erase Dist',
      buildStart() {
        fs.rmSync(path.resolve('dist'), { recursive: true, force: true })
      }
    },
    typescript({
      module: 'esnext',
      declaration: true,
      declarationDir: './dist'
    })
  ]
}

module.exports = options
