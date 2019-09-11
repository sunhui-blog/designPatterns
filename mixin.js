var Car = function (settings) {
  this.model = settings.model || 'no model provided'; this.colour = settings.colour || 'no colour provided';
};

var Mixin = function () { };

Mixin.prototype = {
  driveForward: function () {
    console.log('drive forward');
  },
  driveBackward: function () {
    console.log('drive backward');
  }
};

function augment(receivingClass, givingClass) {
  if (arguments[2]) {
    for (var i = 2, len = arguments.length; i < len; i++) { receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]]; }
  } else {
    for (var methodName in givingClass.prototype) {
      if (!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
}

augment(Car, Mixin, 'driveForward', 'driveBackward');
var vehicle = new Car({ model: 'Ford Escort', colour: 'blue' });

vehicle.driveForward();
vehicle.driveBackward();