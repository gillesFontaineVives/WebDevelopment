const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let save = document.getElementById("save");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	colorDemos[0].style.backgroundColor="red";
	save.addEventListener("click", savecolor);
}

const savecolor = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let section = document.querySelector("section");
	let kleur = colorDemos[0].style.backgroundColor;

	let buttonkleur = document.createElement("button");
	buttonkleur.id = "1";
	buttonkleur.addEventListener("click", restore);
	buttonkleur.style.backgroundColor = kleur;
	//buttonkleur.className = "colorDemo";

	let buttondelete = document.createElement("button");
	buttondelete.textContent = "X";
	buttonkleur.appendChild(buttondelete);
	section.appendChild(buttonkleur);

}

const update = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let values = document.getElementsByClassName("values");

	let Roodvalue=sliders[0].value;
	let Groenvalue=sliders[1].value;
	let Blauwvalue=sliders[2].value;
	//let doorzicht=sliders[3].value / 10;

	values[0].innerHTML = Roodvalue;
	values[1].innerHTML = Groenvalue;
	values[2].innerHTML = Blauwvalue;
	//values[3].innerHTML= doorzicht.toString();

	colorDemos[0].style.backgroundColor= 'rgba(' + Roodvalue + ',' + Groenvalue + ',' + Blauwvalue + ')';
	//colorDemos[0].style.backgroundColor= 'rgba(' + Roodvalue + ',' + Groenvalue + ',' + Blauwvalue + ',' + doorzicht + ')';
}

const restore = (element) => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	colorDemos[0].style.backgroundColor = element.style.backgroundColor;
}

window.addEventListener("load", setup);