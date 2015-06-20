function printAndGetHighScore(scores) {
	var highScore = 0;
	var output;
	for (var i = 0; i < scores.length; i++) {
		output = "buble solution #" + i + " score: " + scores[i];
		console.log(output);
		if (scores[i] > highScore) {
			highScore = scores[i];
		}
	}
	return highScore;
}