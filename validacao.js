const form = document.getElementById('comparador');
const mensagemSucesso = document.querySelector('.success-message');
const mensagemErro = document.querySelector('.error-message');
form.addEventListener('submit', function(e){
    e.preventDefault();

const inputA = document.getElementById('valorA');
const inputB = document.getElementById('valorB');

    if (inputB.value > inputA.value){
     
        mensagemSucesso.style.display = 'block';

        inputA.value = '';
        inputB.value = '';
    }
    else{
         document.querySelector('.error-message').style.display = 'block';
    }

    setTimeout(() =>{
        mensagemSucesso.style.display = 'none';
        mensagemErro.style.display = 'none';
    }, 3 * 1000 );
})