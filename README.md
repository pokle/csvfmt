# csvfmt

A nicer command line csv tool than `cut -d , -f 1,2,3`

## Install

This is a command line tool, so install it globally so it's available on your path:
```
npm install --global csvfmt
```

## Specifying files

Provide files on the command line to parse:

```
$ csvfmt samples/people.csv
[ 'name', 'sex', 'age' ]
[ 'morris', 'm', '12' ]
[ 'jenna', 'f', '13' ]
[ 'yarris', 'c', '200' ]
```

csvfmt reads CSV files from its standard input stream if no files are specified.

## Formatting

--headers parses headers, and returns objects instead of arrays:

```
$ csvfmt --headers samples/people.csv
{ name: 'morris', sex: 'm', age: '12' }
{ name: 'jenna', sex: 'f', age: '13' }
{ name: 'yarris', sex: 'c', age: '200' }
```