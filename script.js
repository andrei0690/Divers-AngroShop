//document.body.style.backgroundImage = "url('DiversBackgroundAlb.png')";
let elements = document.getElementsByTagName("li");
let promotion = document.querySelector(".promotion");
let container = document.querySelector(".container");
let category = document.querySelector(".category");
let list = document.querySelector(".dropdown");
let category_name = document.getElementsByClassName("category_name");
let desktop_theme = document.getElementById("moon_sun");
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
		desktop_theme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
		elements[0].innerHTML = `Tema Intunecata <i class="fa-solid fa-moon"></i>`;
		document.body.style.backgroundColor = "white";
		//document.body.style.backgroundImage = "url('DiversBackgroundAlb.png')";
		for (let index = 0;index < category_name.length;index++)
		{
			category_name[index].style.color = "black";
		}
		change = true;
		return 0;
	}
	else if(change = true)
	{
		desktop_theme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
		elements[0].innerHTML = `Tema Luminoasa <i class="fa-solid fa-sun"></i>`;
		document.body.style.backgroundColor = "#2F2F2F";
		//document.body.style.backgroundImage = "url('DiversBackgroundNegru.png')";
		for (let index = 0;index < category_name.length;index++)
		{
			category_name[index].style.color = "white";
		}
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