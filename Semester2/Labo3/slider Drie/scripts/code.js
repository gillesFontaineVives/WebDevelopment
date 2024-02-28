const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);
	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);
	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input", update);
	sliders[3].addEventListener("change", update);
	sliders[3].addEventListener("input", update);

	// maak het blokje rood
	colorDemos[0].style.backgroundColor="red";
}

const update = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let values = document.getElementsByClassName("values");

	let Roodvalue=sliders[0].value;
	let Groenvalue=sliders[1].value;
	let Blauwvalue=sliders[2].value;
	let doorzicht=sliders[3].value / 10;

	values[0].innerHTML = Roodvalue;
	values[1].innerHTML = Groenvalue;
	values[2].innerHTML = Blauwvalue;
	values[3].innerHTML= doorzicht.toString();

	colorDemos[0].style.backgroundColor= 'rgba(' + Roodvalue + ',' + Groenvalue + ',' + Blauwvalue + ',' + doorzicht + ')';
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);