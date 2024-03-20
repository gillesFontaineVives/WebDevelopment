const setup = () => {
	let button = document.getElementById("button");
	button.addEventListener("click", tafelsrekenen);
}

const tafelsrekenen = () => {
	let tafeltekst = document.getElementById("tafel").value;
	let error = document.getElementById("errorMessage");
	if(isGetal(tafeltekst) && tafeltekst.length !== 0){
		error.textContent = "";

		let tafelTabel = document.getElementById(tafeltekst);
		if(tafelTabel !== null){
			verwijderAlleChildren(tafelTabel);
		} else {
			tafelTabel = document.createElement("div");
			tafelTabel.className = "Tafeltabel";
			tafelTabel.id = tafeltekst;
			document.body.appendChild(tafelTabel);
		}

		let datum = new Date();
		let tijd = datum.getHours() + ":" + datum.getMinutes() + ":" + datum.getSeconds();

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