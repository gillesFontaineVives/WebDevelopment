const setup = () => {
	let button = document.getElementById("button");
	button.addEventListener("click", tafelsrekenen);
}

const tafelsrekenen = () => {
	verwijderAlleChildren(div);
	let tafeltekst = document.getElementById("tafel").value;
	let error = document.getElementById("errorMessage");

	let tafelTabel = document.createElement("div");
	tafelTabel.className = "Tafeltabel";

	var datum = new Date();
	var tijd = datum.getHours() + ":" + datum.getMinutes() + ":" + datum.getSeconds();

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

		document.body.appendChild(tafelTabel);
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