/* 
 * @class  TrafficLight
 * @class  CarsTrafficLight
 * 
 * @requires  Class
 */

var TrafficLight = function () {
  this.lights = {
    red: new Light('red'),
    green: new Light('green')
  };
}

TrafficLight.prototype = {
  constructor: TrafficLight,

  /* stops traffic by turning on only the red light */
  stop: function () {
    this.lights.green.turnOff();
    this.lights.red.turnOn();
  },

  /* allows traffic by turning only the green light on */
  pass: function () {
    this.lights.red.turnOff();
    this.lights.green.turnOn();
  }
}

var CarsTrafficLight = function () {
  this.lights.yellow = new Light('yellow');
}

CarsTrafficLight.prototype = new TrafficLight();

CarsTrafficLight.prototype.constructor = CarsTrafficLight;

/* stops traffic by turning on only the red light,
   adds a yellow light */
CarsTrafficLight.prototype.pass = function () {
  var self = this;

  self.lights.yellow.turnOn();
   
  setTimeout(function () {
    self.lights.yellow.turnOff();
  }, 2000);

  setTimeout(function(){
    self.lights.red.turnOff();
    self.lights.green.turnOn();
  }, 2000);
};

/* allows cars to pass by turning only the green light on,
   adds a yellow light */
CarsTrafficLight.prototype.stop = function () {
  var self = this;

  self.lights.green.turnOff();
  self.lights.yellow.turnOn();

  setTimeout(function () {
    self.lights.yellow.turnOff();
  }, 2000);

  setTimeout(function () {
    self.lights.red.turnOn();
  }, 2000);
};
