const vsprintf = require('sprintf-js').vsprintf;

module.exports = format => args => console.log(vsprintf(format, args));