const commandLineArgs = require('command-line-args')
 
const optionDefinitions = [
  { name: 'headers', alias: 'h', type: Boolean },
  { name: 'format', alias: 'f', type: String },
  { name: 'help', type: Boolean },
  { name: 'version', alias: 'v', type: Boolean }
]

const options = commandLineArgs(optionDefinitions, { partial: true });

if (options.help || options.version) {
  console.error('csvfmt', require(require('path').join(__dirname, 'package.json')).version)
  // console.error('Usage at: https://github.com/pokle/csvfmt')
  const fs = require('fs')
  const path = require('path')
  console.error(String(fs.readFileSync(path.join(__dirname, 'README.md'))));
  process.exit(0);
}


options.files = options._unknown || []
delete options._unknown
module.exports = options
