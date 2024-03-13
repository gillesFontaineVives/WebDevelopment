const setup = () => {
    let tekst = "";
    let gemeenten = [];
    do{
       tekst = prompt("Gemeente:", "gemeente");
       if(tekst !== "stop"){
           gemeenten.push(tekst);
       }
    }while (tekst !== "stop")
    gemeenten.sort();
    let lijst = document.getElementById("gemeenten");
    for(var i = 0; i < gemeenten.length; i++) {
        let opt = gemeenten[i];
        let gemeente = document.createElement("option");
        gemeente.textContent = opt;
        gemeente.value = opt;
        lijst.appendChild(gemeente);
    }
}

window.addEventListener("load", setup);