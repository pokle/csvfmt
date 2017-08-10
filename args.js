const commandLineArgs = require('command-line-args')
 
const optionDefinitions = [
  { name: 'headers', alias: 'h', type: Boolean },
  { name: 'format', alias: 'f', type: String }
]

const options = commandLineArgs(optionDefinitions, { partial: true });
options.files = options._unknown || []
delete options._unknown
module.exports = options
