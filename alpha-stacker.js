var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var line = "";
function stackLetters(theAlphabetArray) {
	for (var i = 0; i < alphabet.length; i++) {
		line += alphabet[i];
		var remainder = i % 3;
		if (remainder === 0) {
			line += " ";
		}
		console.log(line);
	}
}

stackLetters(alphabet);
