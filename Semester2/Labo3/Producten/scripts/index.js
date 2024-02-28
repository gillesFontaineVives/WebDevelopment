const setup = () => {
    let button = document.getElementById("herbereken")
    button.addEventListener("click", bereken);
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
const bereken = () => {
    let prijzen=document.getElementsByClassName("prijzen");
    let aantalen = document.getElementsByClassName("aantalen");
    let procenten = document.getElementsByClassName("procenten");
    let subtotalen=document.getElementsByClassName("subtotalen")
    let totaalhtml = document.getElementById("totaal");

    let subtotaal1=(parseInt(prijzen[0].innerHTML) * aantalen[0].value) * (1+(parseInt(procenten[0].innerHTML)/100));
    let subtotaal2=(parseInt(prijzen[1].innerHTML) * aantalen[1].value) * (1+(parseInt(procenten[1].innerHTML)/100));
    let subtotaal3=(parseInt(prijzen[2].innerHTML) * aantalen[2].value) * (1+(parseInt(procenten[2].innerHTML)/100));

    let prctotaal1 = subtotaal1.toFixed(2);
    let prctotaal2 = subtotaal2.toFixed(2);
    let prctotaal3 = subtotaal3.toFixed(2);

    subtotalen[0].innerHTML = prctotaal1 + " Eur";
    subtotalen[1].innerHTML = prctotaal2 + " Eur";
    subtotalen[2].innerHTML = prctotaal3 + " Eur";

    let totaal = subtotaal1 + subtotaal2 + subtotaal3;
    totaalhtml.innerHTML = totaal.toFixed(2) + " Eur";

}

window.addEventListener("load", setup);