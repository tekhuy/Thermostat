var Thermostat = function() {
  this.temperature = 20;
  this.minimumTemperature = 10;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  return this.temperature += changeTempBy;
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