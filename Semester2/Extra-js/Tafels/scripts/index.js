const setup = () => {
	let button = document.getElementById("button");
	button.addEventListener("click", tafelsrekenen);
}

const tafelsrekenen = () => {
	let tafeltekst = document.getElementById("tafel");
	let error = document.getElementById("errorMessage");
	if(isGetal(tafeltekst.value)){
		
	}else{
		error.innerHTML = "Geef een nummer";
	}
}

const isGetal = (tekst) => {
	return !isNaN(tekst);
}
window.addEventListener("load", setup);