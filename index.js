const resultMessage = document.getElementById("message");
// avisa dónde irá el mensaje una vez realizada la función más conveniente
function cipherFunction() {
	const offset = parseInt(document.getElementById("number").value);
	// saca el valor de la caja de desplazamiento y la vuelve variable
	const string = document.getElementById("cipherDecipherText").value;
	// saca el valor de la caja de texto y la vuelve variable
	if (offset=="") {
		alert("No se ha ingresado la cantidad de desplazamientos.");
	}
	else if (offset==0) {
		alert("El número de desplazamientos no puede ser igual a 0.");
	}
	else {
		resultMessage.innerHTML = cipher.encode(string,offset);
	}
}
function decipherFunction() {
	const offset = parseInt(document.getElementById("number").value);
	// saca el valor de la caja de desplazamiento y la vuelve variable
	const string = document.getElementById("cipherDecipherText").value;
	// saca el valor de la caja de texto y la vuelve variable
	if (offset=="") {
		alert("No se ha ingresado la cantidad de desplazamientos.");
	}
	else if (offset==0) {
		alert("El número de desplazamientos no puede ser igual a 0.");
	}
	else {
		resultMessage.innerHTML = cipher.decode(string,offset);
	}
}