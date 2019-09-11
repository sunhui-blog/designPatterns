class A {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  factoryMethod() {
    console.log('hello,' + this.name + ' in A')

    return new F(this.name, this.age)
  }
}

class B {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  useFactory() {
    console.log('hello,' + this.name + ' in B, age:' + this.age)
  }
}

class F {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  useFactory() {
    alert(this.name)
  }
}

const C = new A('LIMING', 13)
C.factoryMethod().useFactory()

const D = new A('HANMEIMEI', 15)
D.factoryMethod().useFactory()

const E = new A('LIUJUN', 14)
E.factoryMethod().useFactory()