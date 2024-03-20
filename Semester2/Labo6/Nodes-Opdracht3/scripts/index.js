const setup = () => {
    let button = document.getElementById("createp");
    button.addEventListener("click", create);
}

const create = () => {
    let p = document.createElement("p");
    let div = document.querySelector("div");
    div.appendChild(p);
}

window.addEventListener("load", setup);