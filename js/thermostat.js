var Thermostat = function() {
  this.powerSavingMode = true;
  this.temperature = 20;
  this.minTemperature = 10;
  this.maxTemperature = 32;
  this.resetTo = 20;
  this.maxOnPowerSave = 25;
  this.greenTemperature = 18;
  this.redTemperature = 24;

};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  var newTemp = this.temperature += changeTempBy;
  if (this.powerSavingMode) {
    this.temperature = Math.min(newTemp, this.maxOnPowerSave)
  } else {
    this.temperature = Math.min(newTemp, this.maxTemperature);
  };
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
    this.temperature = Math.min(this.temperature, this.maxOnPowerSave);
  };
};

Thermostat.prototype.tempReset = function() {
  this.temperature = this.resetTo;
};

Thermostat.prototype.colorDisplay = function() {
  if (this.temperature < this.greenTemperature) {
    return "green";
  } else if (this.temperature > this.redTemperature) {
    return "red";
  } else {
    return "yellow";
  };
};

Thermostat.prototype.tempReset = function() {
  this.temperature = this.resetTo
};

Thermostat.prototype.changeMinTemp = function(temp) {
  this.minTemperature = temp
};