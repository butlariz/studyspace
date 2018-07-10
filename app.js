var allUsers = {
	nome: "admin",
	senha: "teste",
	login: false
}

document.onload = access();

function access(){
	if (allUsers.login === false && window.location !== "file:///home/laboratoria/Documentos/Study/login.html") {
		// window.location="login.html";
		console.log("login")
	}
	return false;
}

function login() {
	var userName = document.getElementById("user").value;
	var userPass = document.getElementById("senha").value;

	if (!userName  || !userPass) {
		document.getElementsByClassName("errorMsg")[0].innerHTML = "Digite seu usuário e senha";
	} else if (userName === allUsers.nome && userPass === allUsers.senha ) {
		window.location="home.html";
		allUsers.login = true;
	} else { 
		document.getElementsByClassName("errorMsg")[0].innerHTML = "Usuário ou senha incorretos!";
	}
	
	return true;
}