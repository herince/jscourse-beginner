/** 
 * @class  TrafficLight
 * 
 * @requires  Class
 */

var TrafficLight = function (type) {
  if (type === undefined || (type !== 'cars' && type !== 'humans')) {
    throw 'Invalid traffic lights type!';
    return;
  }

  this.type = type;
  this.lights = {};

  if (type == 'cars') {
    this.lights = {
      red: new Light('red'),
      yellow: new Light('yellow'),
      green: new Light('green')
    };
  } else {
    this.lights = {
      red: new Light('red'),
      green: new Light('green')
    };
  }
}

TrafficLight.prototype = {
  constructor: TrafficLight,
  
  /* stops traffic by turning on only the red light */
  stop: function () {
    if (this.type == 'cars') {
      this.lights.yellow.turnOff();
    }

    this.lights.green.turnOff();
    this.lights.red.turnOn();
  },

  /* allows cars/humans to pass by turning only the green light on */
  pass: function () {
    if (this.type == 'cars') {
      this.lights.yellow.turnOff();
    }

    this.lights.red.turnOff();
    this.lights.green.turnOn();
  }
}