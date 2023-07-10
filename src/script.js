const admUser = 'robson';
const passwordAdm = 'xaverinhu';




function login(event) {
  	event.preventDefault(); // Impede o envio do formulário

	const nameUser = document.getElementById('f-user').value;
	const passPassword = document.getElementById('f-password').value;

	if(nameUser == admUser && passPassword == passwordAdm){
	alert('Está certo');
	window.location.href = 'admin-page.html';
	}else{
		alert('login ou senha errada');
	}

	const data = [nameUser, passPassword];
	console.log(data);
	return;
}




document.getElementById('add-user-form').addEventListener('submit', adicionarUsuario);

  function adicionarUsuario(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos do formulário
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Lógica para adicionar um novo usuário
    // ... Faça o que for necessário para adicionar o novo usuário ...

    // Exemplo de exibição de mensagem de sucesso
    alert('Novo usuário adicionado com sucesso!');

    // Limpa os campos do formulário
    document.getElementById('new-username').value = '';
    document.getElementById('new-password').value = '';
  }


