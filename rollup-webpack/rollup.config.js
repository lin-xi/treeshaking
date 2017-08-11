import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/main.js',
  dest: 'rollup.bundle.js',
  format: 'cjs',
  treeshake: true,
  plugins: [
    babel(),
    uglify()
  ]
}
