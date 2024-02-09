const setup = () => {
    let btnwijwigen=document.getElementById("btnWijzigen");
    
    btnwijwigen.addEventListener("click", wijzigen);
}

const wijzigen = () => {
    let pElement=document.getElementById("txtOutput"); 
    pElement.innerHTML="Welkom!"; 
}

window.addEventListener("load", setup);