const setup = () => {
	let li = document.querySelectorAll("li");
    let body = document.querySelector("body");
    for (let i = 0; i < li.length; i++) {
        li[i].className += "listitem";
    }
    let temp = document.querySelectorAll(".listitem");
    for (let i = 0; i < temp.length; i++) {
        temp[i].style.color = "red";
      }
    let img = document.createElement("img");
    img.src = "images/me.png";
    body.appendChild(img);
    console.log(li);
}

window.addEventListener("load", setup);