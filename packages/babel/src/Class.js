// classes
class Person {
  constructor(name) {
    this.name = name
  }

  sayName() {
    console.log(`my name is ${this.name}`)
  }
}

const p = new Person()

p.sayName()
