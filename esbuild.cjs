/* eslint-disable no-undef */
const { build } = require('esbuild');

build({
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: 'node',
    entryPoints: ['src/app.jsx'],
    outfile: 'dist/app.js',
    target: 'node20',
}).catch(() => process.exit(1));