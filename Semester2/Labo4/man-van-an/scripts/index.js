const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", zoekAnVoor);
    button.addEventListener("click", zoekAnAchter);
}

const zoekAnVoor = () => {
    let tekst = document.getElementById("tekst");
    tekst = tekst.value.toLowerCase();
    let index = 0;
    let teller = 0;
    for (let i = 0; i < tekst.length; i++) {
       index = tekst.indexOf("an",index);
        if (i === index){
            teller++;
            index++;
        }
    }
    console.log("Vooraan zoeken: " + teller);
}
const zoekAnAchter = () => {
    let tekst = document.getElementById("tekst");
    tekst = tekst.value.toLowerCase();
    let index = tekst.length;
    let teller = 0;
    for (let i = tekst.length; i > 0; i--) {
        index = tekst.lastIndexOf("an",index);
        if (i === index){
            teller++;
            index--;
        }
    }
    console.log("achteraan zoeken: " +teller);
}

window.addEventListener("load", setup);