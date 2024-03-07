const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("submit",check);
}
const check = () => {
    let zip = document.getElementById("zip");
    let nummer = parseInt(zip.value);
    if (nummer < 1000){
        nummer = 1000;
    }else if(zip > 9999){
        nummer = 9999;
    }
    zip.innerText = nummer.toString();
}

window.addEventListener("load", setup);