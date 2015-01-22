console.log("hello")
var thermostat = new Thermostat();

var updateTemperature = function() {
  $('#temperature').text(thermostat.temperature);
  changeColor();
};

var changeColor = function() {
  $('[class$=usage]').attr("class", thermostat.colorDisplay());
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

  $('.power-saving').on('click', function () {
    thermostat.powerSavingModeSwitch();
    if (thermostat.powerSavingMode) {
      updateTemperature(); 
      $('.power-saving').text('Power Saving On');
    } else {
      $('.power-saving').text('Power Saving Off');
    };
  });

});