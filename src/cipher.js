window.cipher = {
	// avisa que esta es la ventana del cipher con sus funciones
	encode: (string, offset) => {
		// avisa que se hará una función llamada encode con 2 parámetros
		let ciphered = "";
		// avisa que hay una variable nueva
		for (let index = 0; index < string.length; index++) {
			// empieza la función for con los parámetros mencionados
			let asciiCode = string.charCodeAt(index);
			// crea la variable asciiCode que va a tomar las letras y transformarlas a ASCII
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
				// función para minúsculas
				let asciiEncode = (asciiCode  - 97 + offset) % 26;
				// formula de encode
				ciphered += String.fromCharCode(asciiEncode + 97);
				// suma letra cifrada a mensaje final
			}
			else if (asciiCode>=65&&asciiCode<=90) {
				// función para mayúsculas
				let asciiEncode = (asciiCode  - 65 + offset) % 26;
				// formula de decode
				ciphered += String.fromCharCode(asciiEncode + 65);
				// suma letra cifrada a mensaje final
			}
			else {
				alert("Caracter no válido");
				// excluye caracteres que no sean los ya mencionados
				break;
			}
		}
		console.log(ciphered);
		// imprime el mensaje cifrado en la consola
		return ciphered;
		// devuelve mensaje cifrado a index.js
	},
	decode: (string, offset) => {
		// avisa que se hará una función llamada encode con 2 parámetros
		let deciphered = "";
		// avisa que hay una variable nueva
		for (let index = 0; index < string.length; index++) {
			// empieza la función for con los parámetros mencionados
			let asciiCode = string.charCodeAt(index);
			// crea la variable asciiCode que va a tomar las letras y transformarlas a ASCII
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
		// imprime el mensaje descifrado en la consola
		return deciphered;
		// devuelve el mensaje descifrado a index.js
	},
}
createCipherWithOffset: (offset) => {
	encode: (string) => {
		let ciphered = "";
		// avisa que hay una variable nueva
		for (let index = 0; index < string.length; index++) {
			// empieza la función for con los parámetros mencionados
			let asciiCode = string.charCodeAt(index);
			// crea la variable asciiCode que va a tomar las letras y transformarlas a ASCII
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
				// función para minúsculas
				let asciiEncode = (asciiCode  - 97 + offset) % 26;
				// formula de encode
				ciphered += String.fromCharCode(asciiEncode + 97);
				// suma letra cifrada a mensaje final
			}
			else if (asciiCode>=65&&asciiCode<=90) {
				// función para mayúsculas
				let asciiEncode = (asciiCode  - 65 + offset) % 26;
				// formula de decode
				ciphered += String.fromCharCode(asciiEncode + 65);
				// suma letra cifrada a mensaje final
			}
			else {
				alert("Caracter no válido");
				// excluye caracteres que no sean los ya mencionados
				break;
			}
		}
	}
	decode: (string) => {
		let deciphered = "";
		// avisa que hay una variable nueva
		for (let index = 0; index < string.length; index++) {
			// empieza la función for con los parámetros mencionados
			let asciiCode = string.charCodeAt(index);
			// crea la variable asciiCode que va a tomar las letras y transformarlas a ASCII
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
	}
}
