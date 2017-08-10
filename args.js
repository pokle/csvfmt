const commandLineArgs = require('command-line-args')
 
const optionDefinitions = [
  { name: 'headers', alias: 'h', type: Boolean },
  { name: 'format', alias: 'f', type: String },
  { name: 'help', type: Boolean }
]

const options = commandLineArgs(optionDefinitions, { partial: true });

if (options.help) {
  console.log('csvfmt usage: https://github.com/pokle/csvfmt')
  process.exit(0);
}



options.files = options._unknown || []
delete options._unknown
module.exports = options
