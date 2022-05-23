const novaTarefa = document.querySelector('[data-form-button]');
const lista = document.querySelector('[data-list]');

novaTarefa.addEventListener('click', (criarTarefa));

function criarTarefa(evento){
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    console.log(valor);

    //criando o elemento li no html 
    const tarefa = document.createElement('li');
    const conteudo = `<p class= "content" >${valor} </p> `
    tarefa.innerHTML = conteudo; 

    lista.appendChild(tarefa);
    input.value="";

    tarefa.classList.add('task');

    //criando botao ao lado da li
    
    tarefa.appendChild(botao());
    tarefa.appendChild(botaoDeleta());
    lista.appendChild(tarefa);
}

    let botao = () => {
    let botaoConclui = document.createElement('button');

    botaoConclui.innerHTML = 'concluir';
    botaoConclui.classList.add('check-button');
    botaoConclui.addEventListener('click',() => {
        console.log("fui clicado")
    });

    botaoConclui.addEventListener('click',concluiTarefa);

    return botaoConclui;
}

    let concluiTarefa =(evento)=>{

    let botaoConclui = evento.target

    let tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
}

    let botaoDeleta =() =>{

    let deletabotao = document.createElement('button');

    deletabotao.innerHTML = 'Deletar';
    deletabotao.addEventListener('click',DeletarTarefa);
    return deletabotao;
}

    let DeletarTarefa =(evento) =>{
    let deletarBotao = evento.target;
    let tarefaCompleta = deletarBotao.parentElement;
    tarefaCompleta.remove();
    return deletarBotao;
    }