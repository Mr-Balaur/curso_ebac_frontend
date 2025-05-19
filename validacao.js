const form = document.getElementById('comparador');
const mensagemSucesso = document.querySelector('.success-message');
const mensagemErro = document.querySelector('.error-message');
const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');

form.addEventListener('submit', function(e){
    e.preventDefault();

const inputA = Number(valorA.value);
const inputB = Number(valorB.value);

    if (inputB > inputA){
     
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';

        valorA.value = '';
        valorB.value = '';
    }
    else{
         document.querySelector('.error-message').style.display = 'block';
         mensagemSucesso.style.display = 'none';

    }

    setTimeout(() =>{
        mensagemSucesso.style.display = 'none';
        mensagemErro.style.display = 'none';
    }, 4 * 1000 );
})