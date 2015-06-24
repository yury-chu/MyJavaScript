//представление
var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function(location) {
		var hit = document.getElementById(location);
		hit.setAttribute("class", "hit");
	},
	displayMiss: function(location) {
		var miss = document.getElementById(location);
		miss.setAttribute("class", "miss");
	}
};

//модель
var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipSunk: 0,
	ship: [{
		locations:["06","16","26"],
		hits: ["","",""]
	},{
		locations:["24","34","44"],
		hits: ["","",""]
	},{
		locations:["10","11","12"],
		hits: ["","",""]
	}]
};