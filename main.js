const form = document.getElementById('form-contato');
const inputNomeContato = document.getElementById('nome');
const inputNumeroTelefone = document.getElementById('telefone');
const contatos = [];
let linhas = '';

inputNumeroTelefone.addEventListener('input', limitarDigitos);

function limitarDigitos(){
    const limiteCaracteres = 11;
    const numeroTelefone = inputNumeroTelefone.value;
    
    if(numeroTelefone.length >= limiteCaracteres) {
        inputNumeroTelefone.value = numeroTelefone.slice(0, limiteCaracteres)
    }
};

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionarLinha();
    atualizaTabela();
    totalContatos();
    atualizaTabelaTotalContatos();
    limpaInput();
})


function adicionarLinha(){
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';
    linhas += linha;
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function totalContatos(){
    contatos.push(inputNomeContato.value);
}

function atualizaTabelaTotalContatos(){    
    document.getElementById('numero-total-contatos').innerHTML = contatos.length;
}

















function limpaInput(){
    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}