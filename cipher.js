window.cipher = {
  encode: (string, offset) => {
	let ciphered = "";
	for (let index = 0; index < string.length; index++) {
		let asciiCode = string.charCodeAt(index);
		switch (asciiCode) {
			case 32:
			case 44:
			case 46:
			case 13:
				ciphered += String.fromCharCode(asciiCode);
				// excepción con el espacio, coma, punto y enter
				continue;
		}
		if (asciiCode>=97&&asciiCode<=122) {
			let asciiEncode = (asciiCode  - 97 + offset) % 26;
			ciphered += String.fromCharCode(asciiEncode + 97);
		}
		else if (asciiCode>=65&&asciiCode<=90) {
			let asciiEncode = (asciiCode  - 65 + offset) % 26;
			ciphered += String.fromCharCode(asciiEncode + 65);
		}
		else {
			alert("Caracter no válido");
			break;
		}
	}
	return ciphered;
	console.log(ciphered);
  },
  decode: (string, offset) => {
	let deciphered = "";
	for (let index = 0; index < string.length; index++) {
		let asciiCode = string.charCodeAt(index);
		switch (asciiCode) {
			case 32:
			case 44:
			case 46:
			case 13:
				deciphered += String.fromCharCode(asciiCode);
				// excepción con el espacio, coma, punto y enter
				continue;
		}
		if (asciiCode>=97&&asciiCode<=122) {
			let asciiDecode = (asciiCode  - 97 - offset) % 26;
			if (asciiDecode < 0) {
				asciiDecode += 26;
			}
			deciphered += String.fromCharCode(asciiDecode + 97);
		}
		else if (asciiCode>=65&&asciiCode<=90) {
			let asciiDecode = (asciiCode  - 65 - offset) % 26;
			if (asciiDecode < 0) {
				asciiDecode += 26;
			}
			deciphered += String.fromCharCode(asciiDecode + 65);
		}
		else {
			alert("Caracter no válido");
			break;
		}
	}
	console.log(deciphered);
	return deciphered;
  }
}