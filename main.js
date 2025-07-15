$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('#lista-de-tarefas').on('click', 'li', (function() {
    $(this).toggleClass('tarefa-concluida');
    }))

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#input-tarefa').val();
        if(novaTarefa) {
            const adicionaTarefa = $('<li style="display: none"></li>').text(novaTarefa);
            $(adicionaTarefa).hide().appendTo('ul').fadeIn(1000);
            $('#input-tarefa').val('');
        }

    })  
       
})