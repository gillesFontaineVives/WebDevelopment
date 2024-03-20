const setup = () => {
	let selector = document.getElementById("Kip");
    let letter = document.getElementById("letter");
    selector.addEventListener("change",imageshow);
    letter.addEventListener("input", tekstcheck);


}

const imageshow = () => {
    let selector = document.getElementById("Kip");
    let divimg = document.getElementById("img");
    let tekst = document.getElementById("note");
    for (let i = 0; i < selector.length; i++) {
        divimg.classList.remove("hidden");
        if (selector[0].selected){
            divimg.className = "";
            tekst.innerText = "Een kip";
        }else if(selector[1].selected){
            divimg.className = "with-egg";
            tekst.innerText = "Hierboven, een kip met een ei \n";
        }
    }
}

const tekstcheck= () => {
    let citaat = document.getElementById("note");
    let citaatzin = citaat.innerText;
    let letter = document.getElementById("letter").value;
    letter = letter.toString();
    let letterklein = letter.toLowerCase();
    let index = 0;
    let teller = 0;
    console.log(citaat);
    for (let i = 0; i < citaatzin.length; i++) {
        index = citaatzin.indexOf(letterklein,index);
        if (i === index){
            teller++;
            index++;
        }
    }
    citaat.innerHTML += "\n Letter " + letter + " Komt " + teller + " keer voor in bovenstaande zin.";
}

window.addEventListener("load", setup);