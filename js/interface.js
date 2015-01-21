console.log("hello")
var thermostat = new Thermostat();

var updateTemperature = function() {
  $('#temperature').text(thermostat.temperature);
};

$(document).ready(function() {
  updateTemperature();

  $('.increase-temp').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('.decrease-temp').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('.reset').on('click', function() {
    thermostat.tempReset();
    updateTemperature();
  });

  $('.pson').on('click', function() {
    thermostat.powerSavingModeOn();
    updateTemperature();
  });

  $('.psoff').on('click', function() {
    thermostat.powerSavingModeOff();
  });

});