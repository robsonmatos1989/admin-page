function login(event) {
  	event.preventDefault(); // Impede o envio do formulário

	const nameUser = document.getElementById('f-user').value;
	const passPassword = document.getElementById('f-password').value;

	const data = [nameUser, passPassword];
	console.log(data);
	return;
}


