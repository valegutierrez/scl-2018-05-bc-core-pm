// window.cipher = {
//   encode: (offset, string) => {
//      	if (number=) {}
	// for (var index = 0; index < messageTextArea.length; index++) {
	// 	var asciiCode = messageTextArea.charCodeAt(index);
	// 	switch (asciiCode) {
	// 		case 32:
	// 		case 44:
	// 		case 46:
	// 			ciphered += String.fromCharCode(asciiCode);
	// 			// excepción con el espacio, coma y punto
	// 			continue;
	// 	}
	// 	if (asciiCode>=97) {
	// 		toLetters = String.fromCharCode((asciiCode  - 97 + number) % 26 + 97);
	// 		ciphered += toLetters;
	// 	}
	// 	else {
	// 		toLetters = String.fromCharCode((asciiCode  - 65 + number) % 26 + 65);
	// 		ciphered += toLetters;
	// 	}
	// }
	// cipheredMessage.innerHTML = ciphered;
	// console.log(ciphered);
//   },
//   decode: () => {
//      Acá va tu código 
//   }
// }

function cipherEncode(offset, string) {
	let ciphered = "";
	for (let index = 0; index < string.length; index++) {
		let asciiCode = string.charCodeAt(index);
		switch (asciiCode) {
			case 32:
			case 44:
			case 46:
				ciphered += String.fromCharCode(asciiCode);
				// excepción con el espacio, coma y punto
				continue;
		}
		if (asciiCode>=97&&asciiCode<=122) {
			ciphered += String.fromCharCode((asciiCode  - 97 + offset) % 26 + 97);
		}
		else if (asciiCode>=65&&asciiCode<=90) {
			ciphered += String.fromCharCode((asciiCode  - 65 + offset) % 26 + 65);
		}
		else {
			alert("Caracter no válido");
			break;
		}
	}
	return ciphered;
}