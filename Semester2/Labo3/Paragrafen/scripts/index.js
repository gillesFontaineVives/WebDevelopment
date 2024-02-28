const setup = () => {
	changeBelangrijk();
}
function changeBelangrijk() {
	var changeBelangrijk = document.getElementsByClassName("belangrijk");
	for(var i = 0; i < changeBelangrijk.length; i++)
	{
		changeBelangrijk[i].className += " opvallend";
	}
  }

  window.addEventListener("load", setup);