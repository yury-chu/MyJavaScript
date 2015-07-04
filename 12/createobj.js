function CarPrototype() {
	this.make = "Webville Motors";
	this.year = 2015;
	this.start = function() {};
	this.stop = function() {};
	this.drive = function() {};
}

var superCar = new CarPrototype();

superCar.model = "Delorian remake";
superCar.color = "black";
superCar.currentTime = new Date();
superCar.fluxCapacitor = {type: "Mr. Fusion"};
superCar.timeTravel = function(date) {};