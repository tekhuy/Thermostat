var Thermostat = function() {
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.powerSavingMode = true;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  var newTemp = this.temperature += changeTempBy;
  if (this.powerSavingMode === true){
    this.temperature = Math.min(newTemp, 25)
  } else {
    this.temperature = Math.min(newTemp, 32)
  };
  return this.temperature;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  var newTemp = this.temperature -= changeTempBy;
  this.temperature = Math.max(newTemp, 10)
  return this.temperature;
};

Thermostat.prototype.powerSavingModeSwitch = function() {
  if (this.powerSavingMode == true) {
    this.powerSavingMode = false;
  } else {
    this.powerSavingMode = true;
  };
};

Thermostat.prototype.tempReset = function() {
  this.temperature = 20;
};