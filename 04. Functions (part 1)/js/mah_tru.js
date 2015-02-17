function typeOf (variable) {
  var type = ({}).toString.call(variable).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  
  if (isNaN(variable)) {
    return 'NaN';
  }

  return type;
}