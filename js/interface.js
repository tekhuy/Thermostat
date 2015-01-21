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

});