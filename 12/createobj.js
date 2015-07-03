var cadiParams = {
	make: "GM",
	model: "Cadillac",
	year: 1995,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892
};

var cadi = new Car(cadiParams);

function Car(params) {
	this.make = params.make;
	this.model = params.model;
	this.year = params.year;
	this.color = params.color;
	this.passengers = params.passengers;
	this.convertible = params.convertible;
	this.mileage = params.mileage;
	this.started = false;
	
	this.start = function() {
		this.started = true;
	};
	this.stop = function() {
		this.started = false;
	};
	this.drive = function() {
		if (this.started) {
			alert("Zoom zoom!");
		} else {
			alert("You need start key press!");
		}
	};
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

var limoParams = {
	make: "Webville MOtors",
	model: "limo",
	year: 1983,
	color: "black",
	passengers: 12,
	convertible: true,
	mileage: 21120
};

var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody of fire", "Poodle", 40);

console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog);