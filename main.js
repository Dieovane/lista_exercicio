const form = document.getElementById("formulario-contato")
const contatos = [];
const telefone = [];

let linhas = ''; 

form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById('nome-contato');
  const inputTelefone = document.getElementById('telefone');

if (contatos.includes(inputNomeContato)) {
  alert(`O contato: ${inputNomeContato.value} já foi inserido`);
  } else {
    contatos.push(inputNomeContato.value);
    telefone.push(parseFloat(inputTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`

    linhas += linha;
  }

  inputNomeContato.value = '';
  inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}