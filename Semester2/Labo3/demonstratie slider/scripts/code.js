const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);

	// maak het blokje rood
	colorDemos[0].style.backgroundColor="red";
}

const update = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let sliders2 = document.getElementsByClassName("slider2");
	let sliders3 = document.getElementsByClassName("slider3");
	let Roodvalue=sliders[0].value;
	let Groenvalue=sliders2[0].value;
	let Blauwvalue=sliders3[0].value;
	colorDemos[0].style.backgroundColor = rgb(Roodvalue,Groenvalue,Blauwvalue);
	console.log("de waarde van de slider is momenteel : "+value);
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);