const admUser = 'robson';
const passwordAdm = 'admin';

let users = [admUser, passwordAdm]; // Array para armazenar os usuários
console.log(users)
// Função para buscar os usuários armazenados no Local Storage
function getUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }
    console.log(users);
}

// Chamar a função para buscar os usuários ao carregar a página
//getUsersFromLocalStorage();

// Exibir os usuários no console
//console.log(users);

function login(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nameUser = document.getElementById('f-user').value;
    const passPassword = document.getElementById('f-password').value;

    if (nameUser === admUser && passPassword === passwordAdm) {
        alert('Está certo');
        window.location.href = 'admin-page.html'; // Redireciona para a página do administrador
        return; // Importante adicionar o "return" para interromper a execução do código após o redirecionamento
    } else {
        alert('login ou senha errada');
    }

   //const data = [nameUser, passPassword];
    //console.log(data);

    // Armazena o primeiro usuário no array de usuários
    /*if (users.length > 0) {
        users.push({ username: nameUser, password: passPassword });
    }*/
}



function newUser(event) {
    
    event.preventDefault(); // Impede o envio do formulário

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Adiciona o novo usuário ao array de usuários
    users.push(newUsername, newPassword);

    // Salva o array atualizado no Local Storage
    localStorage.setItem('users', JSON.stringify(users));

    getUsersFromLocalStorage();

    // Exemplo de exibição de mensagem de sucesso
    alert('Novo usuário adicionado com sucesso!');

    window.location.href = 'login.html';
    return;
    console.log(users);

    

}

//getUsersFromLocalStorage();

    const botaoOcultar = document.getElementById('add');
    const formulario = document.getElementById('cont');

    botaoOcultar.addEventListener('click', function() {
    formulario.style.display = 'none';
});

function loginUser(event){
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(){
        
    }
}