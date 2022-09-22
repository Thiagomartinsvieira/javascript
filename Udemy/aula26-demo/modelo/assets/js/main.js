// capturar evento de submit do formulário 

const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('evento previnido.');
    setResultado('Olá Mundo');
});

function setResultado (msg) {
    const resultado document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = document.createElement('p');
    p.innerHTML = 'qualquer coisa';
    resultado.
}