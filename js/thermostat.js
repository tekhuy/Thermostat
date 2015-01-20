var Thermostat = function() {
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.powerSavingMode = false;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  var hotterTemp = this.temperature += changeTempBy;
  if (this.powerSavingMode === true && hotterTemp > 25){
    this.temperature = 25;
    console.log("The max. temp in power saving mode is 25 degrees")
  } else if (hotterTemp > 32){
  	this.temperature = 32
  } else {
    this.temperature = hotterTemp
  };
  return this.temperature;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  var newTemp = this.temperature -= changeTempBy;
	if (newTemp < 10){
		this.temperature = 10;
		console.log("The minimum temperature is 10degrees");
	} else {
		this.temperature = newTemp;
	};
	return this.temperature;
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.powerSavingMode = true;
};