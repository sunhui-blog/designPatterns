class Animal {
  constructor(name) {
    this.name = name
  }
}

class Creator {
  show(name) {
    return new Animal(name)
  }
}

const creator = new Creator()
const duck = creator.show('duck')
duck.name

const bookFactory = {
  create(name, author) {
    return new Book(name, author)
  }
}

class Book {
  constructor(name, author) {
    this.name = name
    this.author = author
  }

  getBookInfo() {
    console.log('name:' + this.name, 'author:' + this.author)
  }
}

bookFactory.create('巨人的陨落', 'J')