const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", resultaat);
}
const resultaat = () => {
    let output = "";
    let rooker = document.getElementById("rooker");
    let taalnl = document.getElementById("nl");
    let taalfr = document.getElementById("fr");
    let taaleng = document.getElementById("en");
    let favoritebuurland = document.getElementById("buurland").value;
    let bestellingen = document.getElementById("bestelling");
    let bestelingenstring = "";
    if(rooker.checked){
        output += "is een rooker \n";
    }else {
        output += "is geen rooker \n";
    }
    if(taalnl.checked){
        output += "moeder taal is nl \n";
    }else if (taalfr.checked){
        output += "moeder taal is fr \n";
    }else if (taaleng.checked){
        output += "moeder taal is en \n";
    }
    output += "favorite buurland is " + favoritebuurland + "\n";
    for (let i = 0; i < bestellingen.length; i++) {
        if (bestellingen[i].selected){
            bestelingenstring += bestellingen[i].value + " ";
        };
    }
    output += "Bestelling bestaat uit " + bestelingenstring + "\n";
    console.log(output);

}
window.addEventListener("load", setup);