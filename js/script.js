
var switch_log = document.querySelector(".switch-log");
var switch_reg = document.querySelector(".switch-reg");

var login_form = document.querySelector(".login-form");
var reg_form = document.querySelector(".registration-form");


var login_modal = document.querySelector("#login-modal");
var modal_bck = document.querySelector(".modal-background");
var login_close = document.querySelector(".login_close");
var reg_close = document.querySelector(".reg_close");

var pop_login = document.querySelector(".pop-login");

var btn_reset = document.querySelector("#btn_reset");
var btn_reset2 = document.querySelector("#btn_reset2");

var log_delog = 0;


//switch mezi login, registr
switch_reg.addEventListener("click", function(){
	login_form.style.display = "none";
	reg_form.style.display = "block";
	btn_reset2.click();
});

switch_log.addEventListener("click", function(){
	login_form.style.display = "block";
	reg_form.style.display = "none";
	btn_reset.click();
});
//

//vypnutí login, registr
function loginFunction(){
	pop_login.innerHTML="Odhlásit";
	login_modal.style.display = "none";
	modal_bck.style.display = "none";
	log_delog = 1;
	btn_reset.click();
	btn_reset2.click();
}
//

pop_login.addEventListener("click", function(){
	modal_bck.style.display = "block";
	login_form.style.display = "block";
	reg_form.style.display = "none";

	if (log_delog == 0){
		log_delog = 1;
		login_modal.style.display = "block";
	}

	else {
		log_delog = 0;
		pop_login.innerHTML="Přihlásit se";
		modal_bck.style.display = "none";
	}
});

login_close.addEventListener("click", function(){
	modal_bck.style.display = "none";
	login_form.style.display = "none";
	reg_form.style.display = "none";
	log_delog=0;
	btn_reset.click();
	btn_reset2.click();
});
reg_close.addEventListener("click", function(){
	modal_bck.style.display = "none";
	login_form.style.display = "none";
	reg_form.style.display = "none";
	log_delog=0;
	btn_reset.click();
	btn_reset2.click();
});












var header = document.querySelector('.menu-background');
var menu_down = document.querySelector('.hidden-menu');
const hidden = document.querySelector(".hidden-menu");
const menuBtn = document.querySelector(".menu-btn");


var x = 2;
		

	menuBtn.addEventListener("click", function(){

		menuBtn.classList.toggle("open");
		hidden.classList.toggle("show-menu");
		var windowPosition = window.scrollY> 0;



		if (x == 1){
			if(windowPosition==false){
				header.classList.remove("scrolling");
			}

			x = 2;

			}
		else{
			x = 1;
			header.classList.add("scrolling");
		}

		menu_down.classList.toggle("scrolling");
			
	});

	window.addEventListener('scroll', function scroll(){
			
			
		var windowPosition = window.scrollY> 0;
				
		if(x == 2){
			if(windowPosition == true){
				header.classList.add("scrolling");
			}
			else{
				header.classList.remove("scrolling");
			}	
		}			
			
	});

