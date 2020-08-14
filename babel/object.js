// computed-properties
var obj = {
    ["x" + foo]: "heh",
    ["y" + bar]: "noo",
    foo: "foo",
    bar: "bar"
};

// duplicate-keys
var x = { a: 5, a: 6 };
var y = {
  get a() {},
  set a(x) {},
  a: 3,
};

// transform-instanceof
foo instanceof Bar;

// new-target
function Foo() {
    console.log(new.target);
}

Foo(); // => undefined
new Foo(); // => Foo

// object-super
let objSuper = {
    say () {
        return "Hello"
    }
}

let objSuper2 = {
    say () {
        return super.say() + "World!"
    }
}

// shorthand-properties
var o = { a, b, c };

var cat = {
    getName() {
      return name;
    }
};

// object-rest-spread
let { name, age, ...friend } = { name: 1, age: 2, friendName: 3, friendAge: 4 };
console.log(name); // 1
console.log(age); // 2
console.log(friend); // { a: 3, b: 4 }

let n = { name, age, ...friend };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
