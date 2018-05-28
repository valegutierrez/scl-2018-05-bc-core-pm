window.cipher = {
  encode: (offset, string) => {
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
			console.log(ciphered);
		}
		else {
			alert("Caracter no válido");
			break;
		}
	}
	return ciphered;
  },
  decode: (offset, string) => {
	let deciphered = "";
	for (let index = 0; index < string.length; index++) {
		let asciiCode = string.charCodeAt(index);
		switch (asciiCode) {
			case 32:
			case 44:
			case 46:
				deciphered += String.fromCharCode(asciiCode);
				// excepción con el espacio, coma y punto
				continue;
		}
		if (asciiCode>=97&&asciiCode<=122) {
			let asciiDecode = (asciiCode  - 97 - offset) % 26;
			if (asciiDecode >= 0) {
				asciiDecode += 26;
				deciphered += String.fromCharCode(asciiDecode + 97);
			}
			deciphered += String.fromCharCode(asciiDecode + 97);
		}
		else if (asciiCode>=65&&asciiCode<=90) {
			deciphered += String.fromCharCode((asciiCode  - 65 - offset) % 26 + 65);
			console.log(deciphered);
		}
		else {
			alert("Caracter no válido");
			break;
		}
	}
	return deciphered;
  }
}

a = 65
z = 90
z - a = 25
a - 1 = 64 + 26 = 90
a - 2 = 63 + 26 = 89