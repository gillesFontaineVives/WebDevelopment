const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", verplaats);
}

const verplaats = () => {
    let tekst = document.getElementById("tekst").value;
    let index = -1;
    let split = tekst.split(" ");
    for (let i = 0; i < split.length ; i++) {
        if (split[i].localeCompare("de") === 0){
            split[i] = "het";
        } else if(split[i].localeCompare("De") === 0){
            split[i] = "Het";
        }
    }
    console.log(split.join(" "));
}

window.addEventListener("load", setup);