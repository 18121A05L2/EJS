var today = new Date();
var currentDay = today.getDay();

exports.getDate = function (){
  var options = {
    weekday : "long",
    day   : "numeric",
    month : "long"
  };
  return today.toLocaleDateString("en-IN",options);
}

exports.getDay = function(){
  var options = {
    weekday : "long",
  };
  return today.toLocaleDateString("en-IN",options);
}
