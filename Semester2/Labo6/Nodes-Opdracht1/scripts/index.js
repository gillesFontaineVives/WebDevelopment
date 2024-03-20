const setup = () => {
	let p = document.querySelectorAll("p");
    console.log(p);
    p[0].textContent = "Good job";
}

window.addEventListener("load", setup);