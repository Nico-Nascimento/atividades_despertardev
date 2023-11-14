// 1. **Criação de Tarefa:**
// - Crie uma função chamada **`createTask(title, description)`** que recebe o titulo e descrição como parâmetro e permite adicionar uma nova tarefa à lista.
// - A função deve verificar se o título da tarefa é fornecido. Se não for, deve exibir uma mensagem de erro indicando que o título é obrigatório.
// - A nova tarefa deve ser um objeto com as propriedades: **`title`**, **`description`** e **`completed`** (inicializado como **`false`**).

const list = [];

function createTask(title, description) {
    if (!title) {
        console.error('O título é obrigatório.')
        return
    }

    const newTask = {
        title: title,
        description: description,
        completed: false
    };
    
    list.push(newTask)
}


// 2. **Listagem de Tarefas:**
//     - Crie uma função chamada **`listTasks()`** que exiba uma lista formatada de todas as tarefas cadastradas.
//     - Percorra o array de tarefas e mostre o índice, título, descrição e o status (concluída ou não) de cada tarefa.

function listTasks() {
    for (let task of list) {
        console.log(task);
    }
}


// 3. **Atualização de Status de Tarefa:**
// - Crie uma função chamada **`updateTaskStatus(index, completed)`** que permita atualizar o status de conclusão de uma tarefa.
// - Verifique se o índice informado existe e, em seguida, atualize a propriedade **`completed`** da tarefa correspondente para o valor fornecido.

function updateTaskStatus(index, completed) {
    if (index >= 0 && index < list.length){
        list[index].completed = completed

        const statusMessage = completed ? "Concluída" : "Não concluída"
        console.log(`Status da tarefa ${index + 1 }`)
    }  
    else
    console.error("Indice inválido")
}

// 4. **Atualização de Tarefa:**
//     - Crie uma função chamada **`updateTask(index, newTitle, newDescription)`** que permita atualizar o título e a descrição de uma tarefa existente.
//     - Verifique se o índice fornecido é válido e se o novo título é fornecido. Se não for, exiba mensagens de erro apropriadas.
//     - Atualize o título e a descrição da tarefa selecionada com os valores fornecidos.

function updateTask(index, newTitle, newDescription) {
    if (index < 0 || index >= list.length) {
        console.error("Índice inválido!");
        return;
    }

    if (!newTitle) {
        console.error(" Novo título obrigatório.");
        return;
    }

    list[index] = newTitle;
    list[index].description = newDescription;

}

// 5. **Exclusão de Tarefa:**
//     - Crie uma função chamada **`deleteTask(index)`** que permita excluir uma tarefa da lista.
//     - Verifique se o índice fornecido é válido e, em seguida, remova a tarefa correspondente da lista.

const deleteTask = index => {
    if (index < 0 || index >= list.length) {
        console.error(`Índice inválido!`)
        return
    }
    
    const deleteTask = list.splice(index, 1)
    console.log(`${deleteTask[0]} removida.`)

}

// 6. **Execução:**
//     - Crie algumas tarefas de exemplo utilizando a função **`createTask`**.
//     - Liste as tarefas utilizando a função **`listTasks`**.
//     - Atualize o status de uma tarefa e liste novamente.
//     - Atualize o título e descrição de uma tarefa e liste novamente.
//     - Exclua uma tarefa e liste novamente.

createTask("Comprar mantimentos", "Ir ao supermercado e comprar os itens da lista.");
createTask("Estudar JavaScript", "Revisar conceitos básicos.");
createTask("Fazer exercícios", "Caminhar por 30 minutos.");

// Listagem de Tarefas
console.log("Lista de Tarefas:");
listTasks();

// Atualização de Status de uma Tarefa
updateTaskStatus(0, true);

// Listagem de Tarefas após a atualização de status
console.log("Lista de Tarefas após a atualização de status:");
listTasks();

// Atualização de Título e Descrição de uma Tarefa
updateTask(1, "Estudar JavaScript Avançado", "Realizar práticas avançadas de JavaScript.");

// Listagem de Tarefas após a atualização de título e descrição
console.log("\nLista de Tarefas após a atualização de título e descrição:");
listTasks();

// Exclusão de uma Tarefa
deleteTask(2);

// Listagem de Tarefas após a exclusão
console.log("\nLista de Tarefas após a exclusão:");
listTasks();