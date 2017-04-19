import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

const minify = !!process.env.MINIFY

export default {
  entry: 'index.js',
  moduleName: 'brcast',
  useStrict: false,
  sourceMap: minify,
  plugins: [buble(), minify ? uglify() : {}],
  targets: minify
    ? [
      {
        dest: 'dist/brcast.umd.min.js',
        format: 'umd'
      },
      {
        dest: 'dist/brcast.cjs.min.js',
        format: 'cjs'
      }
    ]
    : [
      {
        dest: 'dist/brcast.cjs.js',
        format: 'cjs'
      },
      {
        dest: 'dist/brcast.es.js',
        format: 'es'
      },
      {
        dest: 'dist/brcast.umd.js',
        format: 'umd'
      }
    ]
}
