#!/usr/bin/env bash
set -uo pipefail

cd "$(dirname "$0")"

fail=0
check() {
  local name="$1" expected="$2" actual="$3"
  if [[ "$expected" == "$actual" ]]; then
    printf 'ok   %s\n' "$name"
  else
    printf 'FAIL %s\n' "$name"
    diff <(printf '%s\n' "$expected") <(printf '%s\n' "$actual") || true
    fail=1
  fi
}

check "file mode" \
'["name","sex","age"]
["morris","m","12"]
["jenna","f","13"]
["yarris","c","200"]' \
  "$(./index.js samples/people.csv)"

check "--headers" \
'{"name":"morris","sex":"m","age":"12"}
{"name":"jenna","sex":"f","age":"13"}
{"name":"yarris","sex":"c","age":"200"}' \
  "$(./index.js --headers samples/people.csv)"

check "--format" \
'  12 m morris
  13 f jenna
 200 c yarris' \
  "$(./index.js --headers --format '%(age)4d %(sex)s %(name)s' samples/people.csv)"

check "stdin" \
'{"name":"morris","sex":"m","age":"12"}
{"name":"jenna","sex":"f","age":"13"}
{"name":"yarris","sex":"c","age":"200"}' \
  "$(./index.js --headers < samples/people.csv)"

check "empty file" "" "$(./index.js samples/empty.csv)"

exit $fail
