var Thermostat = function() {
  this.powerSavingMode = true;
  this.temperature = 20;
  var defaultMin = 10;
  var defaultMax = 32;
  this.resetTo = 20;
  this.maxOnPowerSave = 25;
  this.greenTemperature = 18;
  this.redTemperature = 24;
  this.changeUnit = 1;

  this.getDefaultMin = function() {
    return defaultMin;
  };

  this.getDefaultMax = function() {
    return defaultMax;
  };

};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  changeTempBy  = changeTempBy || this.changeUnit;
  var newTemp = this.temperature += changeTempBy;
  if (this.powerSavingMode) {
    this.temperature = Math.min(newTemp, this.maxOnPowerSave);
  } else {
    this.temperature = Math.min(newTemp, this.getDefaultMax());
  };
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  changeTempBy  = changeTempBy || this.changeUnit;
  var newTemp = this.temperature -= changeTempBy;
  this.temperature = Math.max(newTemp, this.getDefaultMin());
  return this.temperature;
};

Thermostat.prototype.powerSavingModeOn = function () {
  this.powerSavingMode;
  this.temperature = Math.min(this.temperature, this.maxOnPowerSave);
};

Thermostat.prototype.powerSavingModeOff = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.tempReset = function() {
  this.temperature = this.resetTo;
};

Thermostat.prototype.colorDisplay = function() {
  if (this.temperature < this.greenTemperature) {
    return "low-usage";
  } else if (this.temperature > this.redTemperature) {
    return "high-usage";
  } else {
    return "medium-usage";
  };
};

Thermostat.prototype.tempReset = function() {
  this.temperature = this.resetTo
};

Thermostat.prototype.changeDefaults = function(defaultToChange, change) {
  this[defaultToChange] = change;
};








