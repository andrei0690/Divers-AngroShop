let theme = localStorage.getItem("name");
let header = document.querySelector(".header");
let copy = document.querySelector(".copyright");

if(theme == "dark"){
	document.body.style.backgroundColor = "#383435";
	copy.style.color = "white";
	header.style.color = "white";
}
else if(theme == "light"){
	document.body.backgroundColor = "white";
	copy.style.color = "black";
	header.style.color = "black";
}