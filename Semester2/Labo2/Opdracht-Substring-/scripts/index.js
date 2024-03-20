const setup = () => {
	let btnSubstring=document.getElementById("btnSubstring");

	btnSubstring.addEventListener("click", substring);
}

const substring = () => {
	let woord = document.getElementById("txtwoord");
	let txtOutput = document.getElementById("txtOutput");
	let txtbegin = document.getElementById("txtbegin");
	let txteinde = document.getElementById("txteinde");
	
	let omzetten = woord.value;
	let deel = omzetten.substring(txtbegin.value,txteinde.value-2);

	txtOutput.innerHTML=deel;
}


window.addEventListener("load", setup);