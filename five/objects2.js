function getSecret(file, secretPassword) {
	file.opened = file.opened + 1;
	if (secretPassword == file.password) {
		return file.contents;
	} else {
		return "invalid password! No secret for you!";
	}
}

function setSecret(file, secretPassword, secret) {
	if (secretPassword == file.password) {
		file.opened = 0;
		file.contents = secret;
	}
}

var superSecretFile = {
	level: "classified",
	opened: 0,
	password: 2,
	contents: "Dr Evels next meeting is in Detroit"
}
var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr in Philadelphia!");
secret = getSecret(superSecretFile, 2);
console.log(secret);
