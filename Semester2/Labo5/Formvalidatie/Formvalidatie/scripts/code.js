const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilieNaam()
	valideerGeboorte();
	valideerEmail();
	valideerAaantalKinderen();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		reportError(txtVoornaam,"max. 30 karakters");
	} else {
		clearError(txtVoornaam);
	}
};
const valideerFamilieNaam = () => {
	let txtFamilie = document.getElementById("txtFamilienaam");
	let familie = txtFamilie.value.trim();
	if (familie.length === 0){
		reportError(txtFamilie,"Verplicht veld");
	}else if (familie.length > 50) {
		reportError(txtFamilie,"max. 50 karakters");
	} else {
		clearError(txtFamilie);
	}
};

const valideerGeboorte = () => {
	let txtGeboorte = document.getElementById("txtGeboorte");
	let geboorte = txtGeboorte.value.trim();
	let indexstreep = geboorte.indexOf("-");
	let indexstreep2 = geboorte.indexOf("-",indexstreep+1);
	if (geboorte.length === 0){
		reportError(txtGeboorte,"Verplicht veld");
	}else if (indexstreep !== 4 && indexstreep2 !== 7) {
		reportError(txtGeboorte,"formaat moet jjjj-mm-dd zijn");
	} else {
		clearError(txtGeboorte);
	}

};
const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let Email = txtEmail.value.trim();
	let indexAddteken = Email.indexOf("@");
	if (Email.length === 0){
		reportError(txtEmail,"Verplicht veld",);
	}else if (indexAddteken === -1 || Email.substring(indexAddteken-1,indexAddteken) === "" || Email.substring(indexAddteken+1,indexAddteken+2) === ""){
		reportError(txtEmail,"geen geldig email adres");
	} else {
		clearError(txtEmail);
	}
};

const valideerAaantalKinderen = () => {
	let txtKinderen = document.getElementById("txtKinderen");
	let aantalKinderen = txtKinderen.value.trim();
	if(aantalKinderen.length > 0){
		if (!isGetal(aantalKinderen)){
			reportError(txtKinderen,"Is geen positief getal");
		}else if (Math.sign(parseInt(aantalKinderen)) === -1){
			reportError(txtKinderen,"Is geen positief getal");
		}
		else if (parseInt(aantalKinderen) > 99){
			reportError(txtKinderen,"Is te vruchtbaar")
		} else {
			clearError(txtKinderen);
		}
	}
};

const reportError = (element, message) => {
	element.className="invalid";
	element.nextElementSibling.innerHTML = message; 
};

const clearError = (element) => {
	element.className="";
	element.nextElementSibling.innerHTML = "";
};

const isGetal = (tekst) => {
	return !isNaN(tekst);
}

window.addEventListener("load", setup);