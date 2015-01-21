var Thermostat = function() {
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 32;
  this.maxOnPS = 25;
  this.powerSavingMode = true;
  this.resetTo = 20
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  var newTemp = this.temperature += changeTempBy;
  if (this.powerSavingMode === true){
    this.temperature = Math.min(newTemp, this.maxOnPS)
  } else {
    this.temperature = Math.min(newTemp, this.maximumTemperature)
  };
  return this.temperature;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  var newTemp = this.temperature -= changeTempBy;
  this.temperature = Math.max(newTemp, this.minimumTemperature)
  return this.temperature;
};

Thermostat.prototype.powerSavingModeSwitch = function() {
  if (this.powerSavingMode == true) {
    this.powerSavingMode = false;
  } else {
    this.powerSavingMode = true;
    this.temperature = Math.max(this.temperature, this.maxOnPS)
  };
};

Thermostat.prototype.tempReset = function() {
  this.temperature = this.resetTo
};