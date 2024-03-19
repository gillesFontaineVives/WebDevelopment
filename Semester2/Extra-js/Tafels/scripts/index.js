const setup = () => {
	let button = document.getElementById("button");
	button.addEventListener("click", tafelsrekenen);
}

const tafelsrekenen = () => {
	let tafeltekst = document.getElementById("tafel").value;
	let error = document.getElementById("errorMessage");

	let taftabel = document.getElementsByClassName("Tafeltabel");
	if(taftabel.length !== 0){
		console.log(taftabel);
		verwijderAlleChildren(taftabel[0]);
	} else {
		tafelTabel = document.createElement("div");
		tafelTabel.className = "Tafeltabel";
		document.body.appendChild(tafelTabel);
	}

	let datum = new Date();
	let tijd = datum.getHours() + ":" + datum.getMinutes() + ":" + datum.getSeconds();

	if(isGetal(tafeltekst) && tafeltekst.length !== 0){
		let div = document.createElement("div");
		div.className = "header";
		div.innerHTML = "Tafel van " + tafeltekst + " aangemaakt op " + tijd + "\n";
		tafelTabel.appendChild(div);

		for (let i = 1; i < 11; i++) {
			let number = tafeltekst * i;
			div = document.createElement("div");
			div.className = "divspec";
			div.innerHTML += tafeltekst + " x " + i + " = " +  number + "\n";
			tafelTabel.appendChild(div);
		}
	}else{
		error.innerHTML = "Geef een nummer";
	}
}

const verwijderAlleChildren = (element) => {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}


const isGetal = (tekst) => {
	return !isNaN(tekst);
}
window.addEventListener("load", setup);