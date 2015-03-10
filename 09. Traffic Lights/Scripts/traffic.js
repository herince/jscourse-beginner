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
  this.colors = {};

  if (type == 'cars') {
    this.colors = {
      red: new Light('red'),
      yellow: new Light('yellow'),
      green: new Light('green')
    };
  } else {
    this.colors = {
      red: new Light('red'),
      green: new Light('green')
    };
  }
}

TrafficLight.prototype = {
  /* stops traffic by turning on only the red light */
  stop: function () {
    if (this.type == 'cars') {
      this.colors.yellow.turnOff();
    }

    this.colors.green.turnOff();
    this.colors.red.turnOn();
  },

  /* allows cars/humans to pass by turning only the green light on */
  pass: function () {
    if (this.type == 'cars') {
      this.colors.yellow.turnOff();
    }

    this.colors.red.turnOff();
    this.colors.green.turnOn();
  }
}