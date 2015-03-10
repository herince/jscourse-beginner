/* 
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
    var self = this;

    self.lights.green.turnOff();

    if (self.type == 'cars') {
      self.lights.yellow.turnOn();

      setTimeout(function () {
        self.lights.yellow.turnOff();
      }, 2000);
    }

    setTimeout(function () {
      self.lights.red.turnOn();
    }, 2000);
  },

  /* allows cars/humans to pass by turning only the green light on */
  pass: function () {
    var self = this;

    if (self.type == 'cars') {
      self.lights.yellow.turnOn();
      
      setTimeout(function () {
        self.lights.yellow.turnOff();
      }, 2000);
    }
    
    setTimeout(function(){
      self.lights.red.turnOff();
      self.lights.green.turnOn();
    }, 2000);
  }
}

/*var CarsTrafficLight = function () {}

CarsTrafficLight.prototype = new TrafficLight('cars');*/