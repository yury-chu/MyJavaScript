function Duck(type, canFly) {
	this.type = type;
	this.canFly = canFly;
}


function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function() {
		if (this.weight > 25) {
			alert(this.name + " says Woof!");
		} else {
			alert(this.name + " says Yip!");
		}
	};
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
	var size = "small";
	if (dogs[i].weight > 10) {
		size = "large";
	}
	console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
}

for (var i = 0; i < dogs.length; i++) {
	dogs[i].bark();
}



function Coffee(roast, ounces) {
	this.roast = roast;
	this.ounces = ounces;
	
	this.getSize = function() {
		if (this.ounces === 8) {
			return "Small ";
		} else if (this.ounces === 12) {
			return "Medium ";
		} else if (this.ounces === 16) {
			return "Large ";
		} else {
			return "Unknown size! ";
		}
	},
	this.toString = function(){
		var size = this.getSize();
		var message = " Yure ordered a " + size + this.roast + " coffee";
		return message;
	}
}

var houseBlend = new Coffee("HOuse Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());


function Car (make, model, year, color, passengers, convertible, mileage, started) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.passengers = passengers;
	this.convertible = convertible;
	this.mileage = mileage;
	this.started = started;
	
	this.start = function() {
		this.started = true;
	};
	this.stop = function() {
		this.started = false;
	};
	this.drive = function() {
		if (this.started) {
			console.log(this.make + " " + this.model + " goes zoom zoom!");
		} else {
			console.log("Start the engine first");
		}
	};
}

var chevy = new Car("Chevy", "Bel air", 1957, "red", 2, 1021, false);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, 12892, false);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, 281241, false);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, 88000, false);

var testCar = new Car("Webville Motors", "test car", 2014, "marine", 2, 21, true);

var cars = [chevy, cadi, taxi, fiat, testCar];

for (var i = 0; i < cars.length; i++) {
	cars[i].start();
	cars[i].drive();
	cars[i].drive();
	cars[i].stop();
}
