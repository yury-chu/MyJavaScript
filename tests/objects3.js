var foo = 6;
function test() {
	var foo = 7;
	function more() {
		var foo = 8;
		console.log(foo);
	}
	more();
	console.log(foo);
}
test();
console.log(foo);