const setup = () => {
	let btnKopieer = document.getElementById("btnKopieer"); 
    btnKopieer.addEventListener("click", kopieer);
}

const kopieer = () => { 
	let txtInput = document.getElementById("txtInput"); 
	let text = txtInput.value;
	let txtoutput = document.getElementById("txtOutput");
	txtoutput.innerHTML=text;
	 
	} 
	

window.addEventListener("load", setup);