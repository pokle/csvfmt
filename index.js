#!/usr/bin/env node

const options = require("./args");
const { parseFile, parseStream } = require("fast-csv");

const print = options.format
  ? require("./sprintf")(options.format)
  : (data) => console.log(JSON.stringify(data));

const csvOptions = { headers: options.headers };

if (options.files.length === 0) {
  parseStream(process.stdin, csvOptions).on("data", print);
} else {
  for (const file of options.files) {
    parseFile(file, csvOptions).on("data", print);
  }
}
