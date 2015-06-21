function prequal(car) {
	if (car.mileage > 10000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
}

var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 40077
};

var worthALook = prequal(taxi);
if (worthALook) {
	console.log("you gotta check out this " + taxi.make + " " + taxi.model);
} else {
	console.log("you should reaally pass on the " + taxi.make + " " + taxi.model);
}