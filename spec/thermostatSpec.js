describe("Thermostat", function() {
  
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("by default", function() {
    
    it("starts at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it("the power saving mode is on", function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });

  });

  describe("changing temperature", function() {
    it("can increase", function() {
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });
  
    it("can decrease", function() {
      thermostat.decreaseTemperature(1);
      expect(thermostat.temperature).toEqual(19);
    });

    it("has a minimum temperature of 10 degrees", function() {
      thermostat.decreaseTemperature(11);
      expect(thermostat.temperature).toEqual(10);
    });

    it("has a maximum temperature of 32degrees", function() {
      thermostat.powerSavingModeOff();
      thermostat.increaseTemperature(14);
      expect(thermostat.temperature).toEqual(32);
    });

    it("can be reset to 20 by pressing reset button", function() {
      thermostat.increaseTemperature(5);
      thermostat.tempReset();
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe("in power saving mode", function() {
    it("has a maximum temperature of 25 degrees", function() {
      thermostat.increaseTemperature(16);
      expect(thermostat.temperature).toEqual(25);
    });

    it("will decrease the temp to 25 degrees if higher", function() {
      thermostat.powerSavingModeOff();
      thermostat.temperature = 30;
      thermostat.powerSavingModeOn();
      expect(thermostat.temperature).toEqual(25);
    });

  });

  describe("The Thermostat color display", function() {

    it("should be green if less than 18 degrees", function() {
      thermostat.decreaseTemperature(3);
      expect(thermostat.temperature).toEqual(17);
      expect(thermostat.colorDisplay()).toBe('low-usage');
    });

    it("should be yellow if less than 25 degrees", function() {
      expect(thermostat.colorDisplay()).toBe('medium-usage');
    });

    it("should be red if 25 degrees or higher", function() {
      thermostat.increaseTemperature(5);
      expect(thermostat.temperature).toEqual(25);
      expect(thermostat.colorDisplay()).toBe('high-usage');
    });

  });

});
