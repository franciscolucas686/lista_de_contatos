const inputNumeroTelefone = document.getElementById('telefone');

inputNumeroTelefone.addEventListener('keyup', function(){
    const limiteCaracteres = 11;
    const numeroTelefone = inputNumeroTelefone.value;

    if(numeroTelefone.length > limiteCaracteres){

        numeroTelefone.slice(0, limiteCaracteres)

    }
})























// const form =document.getElementById('form-contato');
// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     const inputNomeContato = document.getElementById('nome')
    
// })