const admUser = 'robson';
const passwordAdm = 'admin';

let users = [admUser, passwordAdm]; // Array para armazenar os usuários
console.log(users);

function getUsersFromLocalStorage() {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }
  console.log(users);
}

function login(event) {
  event.preventDefault();

  const nameUser = document.getElementById('f-user').value;
  const passPassword = document.getElementById('f-password').value;

  if (nameUser === admUser && passPassword === passwordAdm) {
    alert('Está certo');
    redirectToPage('admin-page.html'); // Redireciona para a página do administrador
    return; // "return" para interromper a execução do código após o redirecionamento
  } else {
    alert('Login ou senha incorretos');
  }
}

function newUser(event) {
  event.preventDefault();

  const newUsername = document.getElementById('new-username').value;
  const newPassword = document.getElementById('new-password').value;

  addUser(newUsername, newPassword);

  alert('Novo usuário adicionado com sucesso!');
  console.log('Novo usuário:', users[users.length - 1]);
  window.location.href = 'login.html';
}

function addUser(username, password) {
  const newUser = { username, password };
  users.push(newUser);
  saveUsersToLocalStorage();
}

function saveUsersToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}

getUsersFromLocalStorage(); // Chama a função para carregar os usuários do localStorage

function loginUser(event) {
  event.preventDefault();

  const nameUser = document.getElementById('f-user').value;
  const passPassword = document.getElementById('f-password').value;

  if (nameUser === admUser && passPassword === passwordAdm) {
    alert('Está certo');
    redirectToPage('admin-page.html'); // Redireciona para a página do administrador
    return; // Importante adicionar o "return" para interromper a execução do código após o redirecionamento
  }

  const foundUser = users.find(user => user.username === nameUser && user.password === passPassword);
  if (foundUser) {
    alert('Está certo');
    redirectToPage('crud.html'); // Redireciona para a página de CRUD para usuários
  } else {
    alert('Login ou senha incorretos');
  }
}

const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sTipo = document.querySelector('#m-tipo');
const sPreco = document.querySelector('#m-preco');
const btnSalvar = document.querySelector('#btnSalvar');

let itens = [];
let id;

function openModal(edit = false, index = 0) {
  modal.classList.add('active');

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active');
    }
  };

  if (edit) {
    sNome.value = itens[index].nome;
    sTipo.value = itens[index].tipo;
    sPreco.value = itens[index].preco;
    id = index;
  } else {
    sNome.value = '';
    sTipo.value = '';
    sPreco.value = '';
    id = undefined;
  }
}

btnSalvar.onclick = e => {
  e.preventDefault();

  const nome = sNome.value.trim();
  const tipo = sTipo.value.trim();
  const preco = sPreco.value.trim();

  if (nome === '' || tipo === '' || preco === '') {
    return;
  }

  if (id !== undefined) {
    itens[id].nome = nome;
    itens[id].tipo = tipo;
    itens[id].preco = preco;
    id = undefined;
  } else {
    const newItem = { nome, tipo, preco };
    itens.push(newItem);
  }

  setItensBD();
  modal.classList.remove('active');
  loadItens();
};

function loadItens() {
  itens = getItensBD();
  tbody.innerHTML = '';
  itens.forEach((item, index) => {
    insertItem(item, index);
  });
}

function insertItem(item, index) {
  let tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.tipo}</td>
    <td>R$ ${item.preco}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;

  tbody.appendChild(tr);
}

function editItem(index) {
  openModal(true, index);
}

function deleteItem(index) {
  itens.splice(index, 1);
  setItensBD();
  loadItens();
}

function redirectToPage(page) {
  window.location.href = page;
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? [];

const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens));

loadItens();
