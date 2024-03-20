const setup = () => {
    let radios = document.getElementsByClassName("fotos");
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("change", background);

    }
}

const background = () => {
    
}

window.addEventListener("load", setup);