// 块级作用域
let name = 'Emily'
const age = 20
const job = 'studemt'

console.log(`name: ${name}, age: ${age}`)

// block-scoped-functions
{
    function name (n) {
        return n;
    }
}

name("Steve");

// block-scoping
{
  let a = 3
}

let a = 3

// exponentiation-operator
let x = 10 ** 2;
x **= 3;
