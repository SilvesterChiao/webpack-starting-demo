// sticky-regex
const a = /o+/y;

// dotall-regex
const b = /./s
const c = /./su

// named-capturing-groups-regex
var re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
console.log(re.exec("1999-02-29").groups.year)
