const fs = require('fs-extra');
const concat = require('concat');
const outputPath ="../htdoc";
(async function build() {
const files = [
outputPath+'/runtime.js',
outputPath+'/polyfills.js',
outputPath+'/scripts.js',
outputPath+'/main.js',
]
await concat(files, outputPath+'/bundle.min.js');
})()
