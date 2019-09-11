var mySingleton = {
  property1: "something",
  property2: "something else",
  method1: function () {
    console.log("hello world");
  }
}

var mySingleton = function () {

  var privateVariable = "something private";

  function showPrivate() {
    console.log(privateVariable)
  }

  return {
    publicMethod: function () {
      showPrivate();
    },

    publicVar: "the public can see this"
  }
}

var single = mySingleton();
single.publicMethod();
console.log(single.publicVar);

var Singleton = (function () {
  var instantiated;

  function init() {
    return {
      publicMethod: function () {
        console.log("hello world!")
      },
      publicProperty: "test"
    }
  }

  return {
    getInstance: function () {
      if (!instantiated) {
        instantiated = init();
      }
      return instantiated;
    }
  }
})();

Singleton.getInstance().publicMethod();

var SingletonTester = (function () {
  function Singleton(options) {
    options = options || {};
    this.name = 'SingletonTester';
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }

  var instance;

  var _static = {
    name: 'SingletonTester',
    getInstance: function (options) {
      if (instance === undefined) {
        instance = new Singleton(options);
      }
      return instance;
    }
  }
  return _static;
})();

var singletonTest = SingletonTester.getInstance({
  pointX: 5
})

console.log(singletonTest.pointX)
