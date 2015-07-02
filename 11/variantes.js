function makePassword(password) {
	return function(passwordGuess) {
		return (passwordGuess === password);
	};
}


function multN(n) {
	return function(m) {
		return m * n;
	};
}


function makeCounter() {
	var count = 0;
	return objtest = {
		increment: function() {
			return count + 1;
		}
	};
}

//erroor
function handler() {
	alert(doneMessage);
}

function makeTimer(doneMessage, n) {
	setTimeout(handler, n);
}

makeTimer("cook are done!", 1000); //(c.521)


//peredel na c.434
function showAnswer(eventObj) {
	var image = eventObj.target;
	var name = image.id;
	name = name + ".jpg";
	image.src = name;
	
	setTimeout(function(){
		var name = image.id;
		name = name + "blur.jpg";
		image.src = name;
	}, 2000);
}

//change environment variable
function setTimer(doneMessage, n) {
	
	setTimeout(function() {
		alert(doneMessage);
	}, n);
	doneMessage = "ouch!";
}

setTimer("cooces are done!",1000);