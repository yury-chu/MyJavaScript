var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	fuel: 0,
	start: function() {
		if (this.fuel == 0) {
			console.log("You need a fuel");
		} else {
			console.log("Get started!");
			this.started = true;
		}
	},
	stop: function() {
		this.started = false;
	},
	drive: function() {
		if (this.started) {
			if (this.fuel > 0) {
				console.log(this.make + " " + this.model + " go go");
				this.fuel -= 1;
			}
		} else {
			console.log("You need to start the engine first");
			this.stop();
		}
	},
	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}
	
};