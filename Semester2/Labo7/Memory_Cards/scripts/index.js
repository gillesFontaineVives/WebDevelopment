const globaal = {
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png"
}
const setup = () => {
    let speelgebied = document.getElementById("speelgebied");
    speelgebied.style.gridTemplateColumns ="repeat(" + globaal.AANTAL_HORIZONTAAL + ", auto)";
    speelgebied.style.gridTemplateRows = "repeat(" + globaal.AANTAL_VERTICAAL+ ", auto)";
    let namesKaarten = ["1.png","2.png","3.png","4.png","5.png","6.png"];
    let teller = [0,0,0,0,0,0];
    for (let i = 0; i < namesKaarten.length *2; i++) {
        let random = 0;
        let img = document.createElement("img");
        do {
            random = 1 + Math.floor(Math.random() * 6);
            img.className = random.toString();
            img.src = globaal.IMAGE_PATH_PREFIX + random + globaal.IMAGE_PATH_SUFFIX;
        }
        while (teller[random++] === 2)
        teller[random]++;
        img.style.height = "100px";
        img.style.width = "100px";
        speelgebied.appendChild(img);
    }
    for (let i = 0; i < teller.length; i++) {
        console.log(teller[i]);
    }
}

window.addEventListener("load", setup);