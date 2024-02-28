const setup = () => {
    let button = document.getElementById("zoeken");
    button.addEventListener("click", zoekVeelvouden);
}

const zoekVeelvouden = () => {
    let veelvouden = document.getElementsByClassName("veelvouden");
    let resultaat = document.getElementById("resultaat");

    let veelvoud1 = parseInt(veelvouden[0].value);
    let veelvoud2 = parseInt(veelvouden[1].value);
    let optelling = 0;

    for (let i = 0; i < 1000 ; i++) {
        if(i % veelvoud1 === 0){
            optelling = optelling + i;
        }else if(i % veelvoud2 === 0){
            optelling = optelling + i;
        }
    }
    resultaat.textContent = optelling;
    console.log(optelling);
}

window.addEventListener("load", setup);