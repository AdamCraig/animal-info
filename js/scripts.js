$(document).ready(function(){
  var animal = prompt("Type what animal you want to learn about: turtles, snakes, or insects.");

  if (animal === "turtles") {
    $('#turtles').show();
  } else if (animal === "snakes") {
    $('#snakes').show();
  } else if (animal === "insects") {
    $('#insects').show();
  } else {
    $('#invalid').show();
  }
});
