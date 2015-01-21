console.log("hello")
var thermostat = new Thermostat();

var updateTemperature = function() {
  changeColor();
  $('#temperature').text(thermostat.temperature);
};

var changeColor = function() {
  if (thermostat.colorDisplay() === 'low-usage') {
    $('.color-display').css("color", "#228b22");
  } else if (thermostat.colorDisplay() === 'high-usage') {
    $('.color-display').css("color", "#b22222");
  } else {
    $('.color-display').css("color", "#ff8c00");
  };
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