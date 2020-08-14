// literals
var b = 0b11; // binary integer literal
var o = 0o7; // octal integer literal
const u = 'Hello\u{000A}\u{0009}!'; // unicode string literals, newline and tab

// template-literals
`foo${bar}`;

// unicode-escapes

var \u{1d49c} = "\u{Babe1}";
console.log(\u{1d49c});

// unicode-regex
var string = "foo💩bar";
var match = string.match(/foo(.)bar/u);
