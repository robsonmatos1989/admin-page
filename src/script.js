const admUser = 'robson';
const passwordAdm = 'xaverinhu';

let users = []; // Array para armazenar os usuários

// Função para buscar os usuários armazenados no Local Storage
function getUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }
}

// Chamar a função para buscar os usuários ao carregar a página
getUsersFromLocalStorage();

// Exibir os usuários no console
console.log(users);

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

    const data = [nameUser, passPassword];
    console.log(data);

    // Armazena o primeiro usuário no array de usuários
    if (users.length === 0) {
        users.push({ username: nameUser, password: passPassword });
    }
}

function adicionarUsuario(event) {
    event.preventDefault(); // Impede o envio do formulário

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Adiciona o novo usuário ao array de usuários
    users.push({ username: newUsername, password: newPassword });

    // Salva o array atualizado no Local Storage
    localStorage.setItem('users', JSON.stringify(users));

    // Exemplo de exibição de mensagem de sucesso
    alert('Novo usuário adicionado com sucesso!');

    // Limpa os campos do formulário
    document.getElementById('new-username').value = '';
    document.getElementById('new-password').value = '';
}
