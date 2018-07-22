import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import { uglify } from 'rollup-plugin-uglify';

// rollup.config.js
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'DomJsonTree'
  },
  plugins: [
    buble(),
    resolve(),
    uglify()
  ]
};
