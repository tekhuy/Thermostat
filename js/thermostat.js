var Thermostat = function() {
  this.powerSavingMode = true;
  this.temperature = 20;
  this.minTemperature = 10;
  this.resetTo = 20
  this.maxTemperature = 32;
  this.maxOnPowerSave = 25;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  var newTemp = this.temperature += changeTempBy;
  if (this.powerSavingMode === true){
    this.temperature = Math.min(newTemp, this.maxOnPowerSave)
  } else {
    this.temperature = Math.min(newTemp, this.maxTemperature)
  };
  return this.temperature;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  var newTemp = this.temperature -= changeTempBy;
  this.temperature = Math.max(newTemp, this.minTemperature)
  return this.temperature;
};

Thermostat.prototype.powerSavingModeSwitch = function() {
  if (this.powerSavingMode == true) {
    this.powerSavingMode = false;
  } else {
    this.powerSavingMode = true;
    this.temperature = Math.min(this.temperature, this.maxOnPowerSave)
  };
};

Thermostat.prototype.tempReset = function() {
  this.temperature = this.resetTo
};