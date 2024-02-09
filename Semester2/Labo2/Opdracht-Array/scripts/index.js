let familliemamen = ["jake", "jonas", "blake","joe","Mike"]; 
const setup = () => {
	console.log(familliemamen.length);
	console.log(familliemamen[0],familliemamen[2],familliemamen[4]);
	addName(prompt("Give new name"));
	console.log(familliemamen.toString());
}

const addName = (name) => {
	familliemamen.push(name);
}

window.addEventListener("load", setup);