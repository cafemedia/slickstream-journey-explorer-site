/* eslint-disable */

import resolve from 'rollup-plugin-node-resolve';

const outFolder = 'dist';

function onwarn(warning) {
  if (warning.code === 'THIS_IS_UNDEFINED')
    return;
  console.error(warning.message);
}

export default [
  {
    input: 'bin/main.js',
    output: {
      file: `${outFolder}/navu-guide.js`,
      format: 'iife',
      name: 'NavuGuide'
    },
    onwarn,
    plugins: [
      resolve()
    ]
  }
];