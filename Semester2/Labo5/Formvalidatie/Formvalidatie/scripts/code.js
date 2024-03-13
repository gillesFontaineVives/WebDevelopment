const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilieNaam()
	valideerGeboorte();
	valideerEmail();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	console.log(voornaam);
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};
const valideerFamilieNaam = () => {
	let txtFamilie = document.getElementById("txtFamilienaam");
	let errFamilie = document.getElementById("errFamilienaam");
	let familie = txtFamilie.value.trim();
	if (familie.length === 0){
		errFamilie.innerHTML = "Verplicht veld";
	}else if (familie.length > 50) {
		txtFamilie.className="invalid"; // invalid class instellen
		errFamilie.innerHTML = "max. 50 karakters";
	} else {
		txtFamilie.className=""; // alle classes verwijderen
		errFamilie.innerHTML = "";
	}
};

const valideerGeboorte = () => {
	let txtGeboorte = document.getElementById("txtGeboorte");
	let errGeboorte = document.getElementById("errGeboorte");
	let geboorte = txtGeboorte.value.trim();
	let indexstreep = geboorte.indexOf("-");
	let indexstreep2 = geboorte.indexOf("-",indexstreep+1);
	if (geboorte.length === 0){
		errGeboorte.innerHTML = "Verplicht veld";
	}else if (indexstreep !== 4 && indexstreep2 !== 7) {
		txtGeboorte.className="invalid"; // invalid class instellen
		errGeboorte.innerHTML = "formaat is moet jjjj-mm-dd";
	} else {
		txtGeboorte.className=""; // alle classes verwijderen
		errGeboorte.innerHTML = "";
	}

};
const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let errEmail = document.getElementById("errEmail");
	let Email = txtEmail.value.trim();
	let indexAddteken = Email.indexOf("@");
	if (Email.length === 0){
		errEmail.innerHTML = "Verplicht veld";
	}else if (indexAddteken === -1 && Email.substring(0,indexAddteken) === "" && Email.substring(indexAddteken,indexAddteken+1) === ""){
		txtEmail.className="invalid"; // invalid class instellen
		errEmail.innerHTML = "geen geldig email adres";
	} else {
		txtEmail.className=""; // alle classes verwijderen
		errEmail.innerHTML = "";
	}
};
const isGetal = (tekst) => {
	return !isNaN(tekst);
}

window.addEventListener("load", setup);