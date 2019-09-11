// http://thejacklawson.com/Mediator.js/

// 多个情况
var mediator = (function () {

  var channels = {};

  var subscribe = function (channel, fn) {
    if (!channels[channel])
      channels[channel] = [];
    channels[channel].push({ context: this, callback: fn });
    return this;
  }

  var publish = function (channel) {
    if (!channels[channel]) return false;
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0, l = channels[channel].length; i < l; i++) {
      var subscription = channels[channel][i];
      subscription.callback.apply(subscription.context, args);
    }
    return this;
  };
  return {
    publish: publish,
    subscribe: subscribe,
    installTo: function (obj) {
      obj.subscribe = subscribe;
      obj.publish = publish;
    }
  };
}());

(function (m) {
  var person = {
    name: "Luke",
    age: 20
  };

  m.subscribe('nameChange', function (arg) {
    console.log(person.name); // Luke
    person.name = arg;
    console.log(person.name); // David
  });
  m.subscribe('ageChange', function (arg) {
    console.log(person.age)
    person.age = arg
    console.log(person.age)
  })

  m.publish('nameChange', 'David');
  m.publish('ageChange', '22')
})(mediator);


// 不完善版本
const mediator = (function () {
  let channels = {}
  let subscribe = function (channel, fn) {
    channels[channel] = { context: this, callback: fn }
  }

  let publish = function (channel) {
    var args = Array.prototype.slice.call(arguments, 1);
    channels[channel].callback.apply(channels[channel].context, args)
  }

  return {
    subscribe: subscribe,
    publish: publish
  }

}())

  (function (m) {
    var person = {
      name: "Luke",
      age: 20
    };
    m.subscribe('nameChange', function (arg) {
      console.log(person.name); // Luke
      person.name = arg;
      console.log(person.name); // David
    });
    m.publish('nameChange', 'David');
  })(mediator);
