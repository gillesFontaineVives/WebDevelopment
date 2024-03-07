const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", zetconsole);
}

const zetconsole = () => {
    let tekst = document.getElementById("tekst");
    let split = maakspaties(tekst.value);
    console.log(split);
}

const maakspaties = (inputText) => {
    let result="";
    result = inputText.split('').join(' ');
    return result;
}

window.addEventListener("load", setup);