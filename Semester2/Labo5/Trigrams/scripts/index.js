const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", triagrams);
}

const triagrams = () => {
    let tekst = document.getElementById("tekst").value;
    let triagram = "";
    for (let i = 0; i < tekst.length ; i++) {
        triagram = tekst.substring(i , i+3);
        if(triagram.length > 2){
        console.log(triagram);
       }
    }
}


window.addEventListener("load", setup);