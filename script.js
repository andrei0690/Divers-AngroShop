let elements = document.getElementsByTagName("li");
let promotion = document.querySelector(".promotion");
let container = document.querySelector(".container");
let category = document.querySelector(".category");
let list = document.querySelector(".dropdown");
let change = true;
let theme = document.querySelector(".theme");
theme.classList.add("remover");
document.title = "Divers AgroShop";
function active(){
	theme.classList.remove("remover");
}
function delete_menu(){
	theme.classList.add("remover");
}

function change_theme(){

	if (change == false){
		elements[0].innerHTML = `Tema Intunecata <i class="fa-solid fa-moon"></i>`;
		document.body.style.backgroundColor = "white";
		change = true;
		return 0;
	}
	else if(change = true)
	{
		elements[0].innerHTML = `Tema Luminoasa <i class="fa-solid fa-sun"></i>`;
		document.body.style.backgroundColor = "#2F2F2F";
		change = false;
		return 0;
	}
}

function destroy_promotion(){

	promotion.remove();
	container.classList.add("unblur");
}

function show_list(){

	list.style.display = "block";

}

function hide_list(){

	list.style.display = "none";

}

category.addEventListener("mouseover",show_list);
category.addEventListener("mouseout",hide_list);