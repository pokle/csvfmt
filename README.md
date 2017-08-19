# csvfmt

A nicer command line csv tool than `cut -d , -f 1,2,3`

## Install

This is a command line tool, so install it globally so it's available on your path:

    npm install --global csvfmt

## Specifying files

Provide files on the command line to parse. csvparse gives you a JSON representation of your CSV file (Useful with jq)

    $ csvfmt samples/people.csv
    ["name","sex","age"]
    ["morris","m","12"]
    ["jenna","f","13"]
    ["yarris","c","200"]

csvfmt reads CSV files from its standard input stream if no files are specified.

## Formatting

--headers parses headers, and returns objects instead of arrays:

    $ csvfmt --headers samples/people.csv
    {"name":"morris","sex":"m","age":"12"}
    {"name":"jenna","sex":"f","age":"13"}
    {"name":"yarris","sex":"c","age":"200"}

...which makes it quite handy with jq:

    $ csvfmt samples/people.csv --headers | jq 'select(.age | tonumber  < 100)'
    {
      "name": "morris",
      "sex": "m",
      "age": "12"
    }
    {
      "name": "jenna",
      "sex": "f",
      "age": "13"
    }

--format lets you specify [sprintf](https://www.npmjs.com/package/sprintf-js) style formatting:

    $ csvfmt samples/people.csv --headers --format '%(age)4d %(sex)s %(name)s'
      12 m morris
      13 f jenna
    200 c yarris

 You can also use positional indexes:

    $ csvfmt samples/people.csv --format '%2$s %1$s'
    sex name
    m morris
    f jenna
    c yarris
