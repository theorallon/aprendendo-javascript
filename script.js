function adicionarTarefa() {

            // Cria a variável "mensagem" e define o texto de feedback
            let mensagem = "Tarefa adicionada com sucesso!";

            // Cria a variável "tarefa" e atribui a ela o valor digitado no input
            let inputTarefa = document.getElementById("inputTarefa");

            //Cria a variável "tarefa", e denomina seu valor como o valor do "inputTarefa" para podermos ver o que tem dentro do input
            let tarefa = inputTarefa.value;

            // Seleciona o <p id="mensagem"> e altera seu conteúdo de texto para a variável "mensagem"
            document.getElementById("mensagem").textContent = mensagem;

            //Cria a variável "listaTarefas" e conecta ela a lista (<ul id="listaTarefas">) 
            let listaTarefas = document.getElementById("listaTarefas");

            //Cria a variável "novaTarefa", e cria uma tag <li> 
            let novaTarefa = document.createElement("li");

            // Define o conteúdo de texto da <li> como a variável "tarefa"
            novaTarefa.textContent = tarefa;

            //faz com que o <li> entre no <ul> e vire um elemento filho (respeitando a hieraquia do HTML)
            listaTarefas.appendChild(novaTarefa);

            // Limpa o campo de entrada após adicionar a tarefa
            inputTarefa.value = ""

            
    }