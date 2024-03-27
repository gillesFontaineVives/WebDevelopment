const globaal = {
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    click: 0
}
const setup = () => {
    let speelgebied = document.getElementById("speelgebied");
    speelgebied.style.gridTemplateColumns ="repeat(" + globaal.AANTAL_HORIZONTAAL + ", auto)";
    speelgebied.style.gridTemplateRows = "repeat(" + globaal.AANTAL_VERTICAAL+ ", auto)";
    let namesKaarten = ["1.png","2.png","3.png","4.png","5.png","6.png"];
    let teller = [0,0,0,0,0,0,0];
    for (let i = 0; i < namesKaarten.length *2; i++) {
        let random = 0;
        let img = document.createElement("img");
        do {
            random = 1 + Math.floor(Math.random() * 6);
            img.className = random.toString();
            img.src = globaal.IMAGE_PATH_PREFIX + "achtergrond" + globaal.IMAGE_PATH_SUFFIX;
        }
        while (teller[random] === 2)
        teller[random]++;
        img.setAttribute("draaied", 0);
        img.addEventListener("click",draai);
        img.style.height = "200px";
        img.style.width = "300px";
        img.style.padding = "5px";
        speelgebied.appendChild(img);
    }
    for (let i = 0; i < teller.length; i++) {
        console.log(teller[i]);
    }
}

const draai = (event) =>{
    if(globaal.click < 2){
        let nummer = event.target.className;
        event.target.setAttribute("draaied", 1);
        event.target.src = globaal.IMAGE_PATH_PREFIX + nummer + globaal.IMAGE_PATH_SUFFIX;
        globaal.click++;
    }
    
}

window.addEventListener("load", setup);