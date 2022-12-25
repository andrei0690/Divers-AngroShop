let elements = document.getElementsByTagName("li");
console.log(elements[0].innerHTML)

let theme = document.querySelector(".theme");
theme.classList.add("remover");
document.title = "Divers AgroShop";
function active(){
	theme.classList.remove("remover");
}
function delete_menu(){
	theme.classList.add("remover");
}

function light_theme(){

	elements[0].innerHTML = `Tema Intunecata <i class="fa-solid fa-moon"></i>`;
	document.body.style.backgroundColor = "black";

}

function dark_theme(){
	elements[0].innerHTML = `Tema Luminoasa <i class="fa-solid fa-sun"></i>`;
	document.body.style.backgroundColor = "black";
}


