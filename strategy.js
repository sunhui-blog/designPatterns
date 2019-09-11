class Contextttest {
  constructor(type) {
    switch (type) {
      case 'A':
        this.strategy = new ConcreteStrategyAA()
        break;
      case 'B':
        this.strategy = new ConcreteStrategyB()
        break;
      case 'C':
        this.strategy = new ConcreteStrategyC()
        break;
    }
  }
  contextttInterface() {
    this.strategy.AlgorithmInterface()
  }
}

class strategy {
  AlgorithmInterface() {

  }
}

class ConcreteStrategyAA extends strategy {
  constructor() {
    super();
    console.log("ConcreteStrategyA")
  }
  AlgorithmInterface() {
    console.log("A func")
  }
}

class ConcreteStrategyB extends strategy {
  constructor() {
    super();
    console.log("ConcreteStrategyA")
  }
  AlgorithmInterface() {
    console.log('B func')
  }
}

class ConcreteStrategyC extends strategy {
  constructor() {
    super();
    console.log("ConcreteStrategyC")
  }
  AlgorithmInterface() {
    console.log('C func')
  }
}

function init_strategy() {
  const ATest = new Contextttest('A')
  ATest.contextttInterface()
}