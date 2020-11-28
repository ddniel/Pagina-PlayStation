var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

document.querySelector(".menu-icon").addEventListener("click", function(){
	if (menuList.style.maxHeight == "0px"){
		menuList.style.maxHeight = "130px";
	}else{
		menuList.style.maxHeight = "0px";
	}
});

