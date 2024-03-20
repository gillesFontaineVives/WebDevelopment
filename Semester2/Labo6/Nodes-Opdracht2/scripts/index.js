const setup = () => {
	let li = document.querySelectorAll("li");
    let body = document.querySelector("body");
    for (let i = 0; i < li.length; i++) {
        li[i].className += "listitem";
    }
    let img = document.createElement("img");
    img.src = "images/me.png";
    body.appendChild(img);
    console.log(li);
}

window.addEventListener("load", setup);