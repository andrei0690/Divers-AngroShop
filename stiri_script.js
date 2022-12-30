let theme = localStorage.getItem('name');
//locationStorage.removeItem("name");
//locationStorage.setItem("name");
let copy = document.querySelector(".copyright");
if (theme == 'dark')
{
	document.body.style.backgroundColor = "#383435";
	copy.style.color = "white";
	
}
else if(theme = 'light'){

	document.body.style.backgroundColor = "white";
	copy.style.color = "black";

}

