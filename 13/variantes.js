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

///////////
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function() {
		if (this.weight > 25) {
			alert(this.name + " says Woof");
		} else {
			alert(this.name + " says Yup");
		}
	};
}

var fido = new Dog("Fido", "mixed", 38);
var fluffy = new Dog("Fluffy", "mixed", 30);
var spot = new Dog("Spot", "chihuahua", 10);

///////////
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function() {
	if (this.weight > 25) {
		console.log(this.name + " says Woof!");
	} else {
		console.log(this.name + " says Yip!");
	}
};

Dog.prototype.run = function() {
	console.log("Run!");
};

Dog.prototype.wag = function() {
	console.log("Wag!");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = function() {
	console.log(this.name + " says WOOOOF!");
};

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

/////////
function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}

Robot.prototype.maker = "objectRU";
Robot.prototype.speak = function() {
	//speak
};
Robot.prototype.makeCoffee = function() {
	// make coffee
};
Robot.prototype.blinkLights = function() {
	// lights
};

var robby = new Robot("Robby", 1956, "Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = function() {
	//on off code
};
robby.makeCoffee = function() {
	//in special coffee
};

rosie.cleanHouse = function() {
	//clean house code
};

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker + " in " + robby.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();

/////////
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function() {
	if (this.weight > 25) {
		console.log(this.name + " says Woof!");
	} else {
		console.log(this.name + " says Yip!");
	}
};

Dog.prototype.run = function() {
	console.log("Run!");
};

Dog.prototype.wag = function() {
	console.log("Wag!");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = function() {
	console.log(this.name + " says WOOOOF!");
};

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

var barnaby = new Dog("Barnaby", "Basset Hound", 55);
Dog.prototype.sit = function() {
	if (this.sitting) {
		console.log(this.name + " is already sitting");
	} else {
		this.sitting = true;
		console.log(this.name + " is now sitting");
	}
};
barnaby.sit();
fluffy.sit();

Dog.prototype.sitting = false;
///// show dogs

var aDog = new Dog();

function ShowDog(name, breed, weight, handler) {
	Dog.call(this, name, breed, weight);
	this.handler = handler;
}
ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function() {
	console.log("Stack");
};
ShowDog.prototype.bait = function() {
	console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
	console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
	console.log("Groom");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Coockie");

if (fido instanceof Dog) {
	console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
	console.log("Fido is a ShowDog");
}

if (scotty instanceof Dog) {
	console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
	console.log("Scotty is a Show Dog");
}

console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);
///////////////
function Game() {
	this.level = 0;
}

Game.prototype.play = function() {
	//Действия игрока
	this.level++;
	console.log("Welcome to level " + this.level);
	this.unlock();
};
Game.prototype.unlock = function() { //<-----------------
	//code unlock laser
	if (this.level === 42) {
		Robot.prototype.deployLaser = function() {
			console.log("You most use laser");
		};
	}
};

function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}

var game = new Game();
var robby = new Robot("Robby", 1956, "Morbius");
var rosie = new Robot("Rosie", 1962, "Jetson");

while (game.level < 44) {
	game.play();
}

robby.deployLaser();
rosie.deployLaser();

//////error message
function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}

Robot.prototype.maker = "ObjRu";
Robot.prototype.errorMessage = "All system go";
Robot.prototype.reportError = function() {
	console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function() {
	this.errorMessage = "I appear to have a short circuit!!!";
};
Robot.prototype.speak = function() {
	alert(this.name + "i speaking");
};
Robot.prototype.makeCoffee = function() {
	alert(this.name +"I make a coffee");
};
Robot.prototype.blinkLights = function() {
	alert(this.name + "I flash lights");
};

function SpaceRobot(name, year, owner, homePlanet) {
	this.name = name;
	this.year = year;
	this.owner = owner;
	this.homePlanet = homePlanet;
}
SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function() {
	alert(this.name + " says Sir, If I may venture an option...");
};
SpaceRobot.prototype.pilot = function() {
	alert(this.name + " says Thrusters? are they important?");
};

var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker);

var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak();


var robby = new Robot("Robby", 1956, "Morbius");
var rosie = new Robot("Rosie", 1962, "Jetson");

//////
function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}

Robot.prototype.toString = function() {
	return this.name + " Robot belonging to " + this.owner;
};


var toy = new Robot("Toy", 2015, "Avary");
console.log(toy.toString());

console.log("Robot is: " + toy);


///////
String.prototype.cliche = function() {
	var cliche = ["lock and load", "touch base", "open the kimono"];
	
	for (var i = 0; i < cliche.length; i++) {
		var index = this.indexOf(cliche[i]);
		if (index >= 0) {
			return true;
		}
	}
	return false;
};

var sentences = ["I'll send my car around to pick you up", "Let's touch base in the morning and see where we are", "We don't want to open the kimono, we just want to inform them"];

for (var i = 0; i < sentences.length; i++) {
	var phrase = sentences[i];
	if (phrase.cliche()) {
		console.log("CLICHE Alert: " + phrase);
	}
}