var tick = true;
function ticker() {
	if (tick) {
		console.log("Tick");
		tick = false;
	} else {
		console.log("Tock");
		tick = true;
	}
}
var setinterval = setInterval(ticker, 1000);

setTimeout(clear, 5500);

function clear() {
	clearInterval(setinterval);
}