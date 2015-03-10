/** 
 * @class  Light
 * 
 * @requires  Class
 */

var Light = function (color) {
  this.color = color;
  this.is_on = false;
}

Light.prototype = {
   
  constructor: Light,
   
  states: [ 'off', 'on' ],
   
  turnOn: function () {
    this.switch(true);
  },
   
  turnOff: function () {
    this.switch(false);
  },
   
  switch: function (is_on) {
    if (this.is_on == ! is_on) {
      this.is_on = is_on;
      console.info(this.color + ' has been turned ' + this.states[ new Number(is_on) ]);
      return this.is_on;
    }
    console.warn(this.color + ' is already ' + this.states[ new Number(this.is_on) ]);
    return this.is_on;
  },
   
  isOn: function () {
    return this.is_on;
  }
}