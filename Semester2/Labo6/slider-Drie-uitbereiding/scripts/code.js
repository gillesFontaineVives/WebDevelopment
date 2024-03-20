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
	let sliders = document.getElementsByClassName("slider");
	let section = document.querySelector("section");
	let kleur = colorDemos[0].style.backgroundColor;

	let buttonkleur = document.createElement("button");
	buttonkleur.setAttribute("data-rood", sliders[0].value);
	buttonkleur.setAttribute("data-groen", sliders[1].value);
	buttonkleur.setAttribute("data-blauw", sliders[2].value);
	buttonkleur.setAttribute("data-doorz", sliders[3].value/10);
	buttonkleur.addEventListener("click", restore);
	buttonkleur.style.backgroundColor = kleur;
	buttonkleur.className = "colorDemo-klein";

	let buttondelete = document.createElement("button");
	buttondelete.addEventListener("click", deletebutton)
	buttondelete.classList = "delete";
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
	let doorzicht=sliders[3].value / 10;

	values[0].innerHTML = Roodvalue;
	values[1].innerHTML = Groenvalue;
	values[2].innerHTML = Blauwvalue;
	values[3].innerHTML= doorzicht.toString();

	colorDemos[0].style.backgroundColor= 'rgba(' + Roodvalue + ',' + Groenvalue + ',' + Blauwvalue + ',' + doorzicht + ')';
}

const deletebutton = (event) => {
	event.stopPropagation();
	let section = document.querySelector("section");

	let button = event.target.parentElement;
	section.removeChild(button);
}

const restore = (event) => {
	event.stopPropagation()
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider")

	let Roodvalue=event.target.getAttribute("data-rood");
	let Groenvalue=event.target.getAttribute("data-groen");
	let Blauwvalue=event.target.getAttribute("data-blauw");
	let doorzicht=event.target.getAttribute("data-doorz");

	sliders[0].value = Roodvalue;
	sliders[1].value = Groenvalue;
	sliders[2].value = Blauwvalue;
	sliders[3].value = doorzicht*10;

	colorDemos[0].style.backgroundColor= 'rgba(' + Roodvalue + ',' + Groenvalue + ',' + Blauwvalue + ',' + doorzicht + ')';
}

window.addEventListener("load", setup);