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
  this.lights = {
    red: new Light('red'),
    green: new Light('green'),
    yellow: new Light('yellow')
  };
}

CarsTrafficLight.prototype = new TrafficLight();

CarsTrafficLight.prototype.constructor = CarsTrafficLight;

/* stops traffic by turning on only the red light,
   adds a yellow light */
CarsTrafficLight.prototype.pass = function () {
  clearTimeout(this.timer);

  this.lights.yellow.turnOn();
  
  this.timer = setTimeout(function () {
    this.lights.yellow.turnOff();
    this.lights.red.turnOff();
    this.lights.green.turnOn();
  }.bind(this), 2000);
};

/* allows cars to pass by turning only the green light on,
   adds a yellow light */
CarsTrafficLight.prototype.stop = function () {
  clearTimeout(this.timer);

  this.lights.green.turnOff();
  this.lights.yellow.turnOn();

  this.timer = setTimeout(function () {
    this.lights.yellow.turnOff();
    this.lights.red.turnOn();
  }.bind(this), 2000);
};
