const resultMessage = document.getElementById("message");
// avisa dónde irá el mensaje una vez realizada la función más conveniente
function cipherFunction() {
	let offset = parseInt(document.getElementById("number").value);
	// saca el valor de la caja de desplazamiento y la vuelve variable
	let string = document.getElementById("cipherText").value;
	// saca el valor de la caja de texto y la vuelve variable
	if (offset=="") {
		alert("No se ha ingresado la cantidad de desplazamientos.");
		// evita que no se ingrese desplazamiento
	}
	else if (offset==0) {
		alert("El número de desplazamientos no puede ser igual a 0.");
		
	}
	else {
		document.getElementById("decipherText").value = cipher.encode(string,offset);
		// imprime el mensaje cifrado en el HTML
	}
}
function decipherFunction() {
	let offset = parseInt(document.getElementById("number").value);
	// saca el valor de la caja de desplazamiento y la vuelve variable
	let string = document.getElementById("decipherText").value;
	// saca el valor de la caja de texto y la vuelve variable
	if (offset=="") {
		alert("No se ha ingresado la cantidad de desplazamientos.");
		// evita que no se ingrese desplazamiento
	}
	else if (offset==0) {
		alert("El número de desplazamientos no puede ser igual a 0.");
		// evita que el desplazamiento sea igual a 0
	}
	else {
		document.getElementById("cipherText").value = cipher.decode(string,offset);
		//imprime el mensaje descifrado en el HTML
	}
}