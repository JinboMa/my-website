import vue from 'rollup-plugin-vue'
// import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import alias from 'rollup-plugin-alias'

export default {
  input: './views/main.js',
  output: {
    file: './static/bundle.js',
    format: 'iife'
  },
  plugins: [
    vue({
      compileTemplate: true,
      css: 'static/bundle.css'
    }),
    alias({
      'vue': 'node_modules/vue/dist/vue.esm.js'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    babel()
  ]
}
