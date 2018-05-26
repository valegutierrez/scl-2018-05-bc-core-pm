// window.cipher = {
//   encode: () => {
//      Acá va tu código 
//   },
//   decode: () => {
//      Acá va tu código 
//   }
// }

function cipherFunction() {
	var cipheredMessage = document.getElementById("message")
	var messageTextArea = document.getElementById("cipherDecipherText").value;
	var ciphered = "";
	for (var index = 0; index < messageTextArea.length; index++) {
		var asciiCode = messageTextArea.toUpperCase().charCodeAt(index);
		if (asciiCode == 32) {
			ciphered += String.fromCharCode(asciiCode);
			continue;
		}
		var toLetters = String.fromCharCode((asciiCode  - 65 + 4) % 26 + 65);
		ciphered += toLetters;
	}
	cipheredMessage.innerHTML = ciphered;
	console.log(ciphered);
}
