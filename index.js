#!/usr/bin/env node

const options = require("./args");

const print = options.format
  ? require("./sprintf")(options.format)
  : (data) => console.log(JSON.stringify(data));

const csv = require("fast-csv");
const csvOptions = { headers: options.headers };
if (options.files.length === 0) {
  csv.fromStream(process.stdin, csvOptions).on("data", print);
} else {
  for (let i = 0; i < options.files.length; i++) {
    csv.fromPath(options.files[i], csvOptions).on("data", print);
  }
}
