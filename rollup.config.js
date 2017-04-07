import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'

export default {
  useStrict: false,
  plugins: [
    buble(),
    resolve({jsnext: true, main: true})
  ]
}
