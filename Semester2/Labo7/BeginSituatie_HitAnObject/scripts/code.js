let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 1000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {

    let start = document.getElementById("start");
    start.addEventListener("click",startgame);

    let clickbom = document.getElementById("target");
    clickbom.addEventListener("click",clickimg);

};

const startgame = () =>{
    global.score = 0;
    console.log(global.score);
    global.timeoutId = setInterval(changeimg,global.MOVE_DELAY);
}

const changeimg = () => {
    let clickbom = document.getElementById("target");
    let numberImage = Math.floor(Math.random()*5);
    clickbom.src = global.IMAGE_PATH_PREFIX + numberImage + global.IMAGE_PATH_SUFFIX;
}

const clickimg = () =>{
    let clickbom = document.getElementById("target");
    let speelveld=document.getElementById("playField");
    let containerhits = document.getElementById("hits");

    let subimg =  clickbom.src.substring(clickbom.src.indexOf("0."),clickbom.src.length);
    if (subimg === "0.png"){
        clearInterval(global.timeoutId);
        window.alert("Game over");
    }else{
        global.score++;
        containerhits.innerText = global.score;

        let maxLeft=speelveld.clientWidth - clickbom.offsetWidth;
        let maxHeight=speelveld.clientHeight - clickbom.offsetHeight;

        let left=Math.floor(Math.random()*maxLeft);
        let top=Math.floor(Math.random()*maxHeight);
        clickbom.style.left=left+"px";
        clickbom.style.top=top+"px";
    }
}




window.addEventListener("load", setup);


