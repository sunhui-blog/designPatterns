class CreateUser {
  constructor (name) {
    this.name = name
    this.getName()
  }
  getName () {
    console.log(this.name)
  }
}

class ProxyNode {
  constructor (name) {
    this.name = name
    this.getInstance()
  }

  getInstance () {
    let instance = null
    if (!instance) {
      instance = new CreateUser(this.name)
    }

    return instance
  }
}

const a = new ProxyNode('AAA')
const b = new ProxyNode('BBB')



