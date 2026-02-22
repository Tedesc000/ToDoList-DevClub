
let contador = 1;

function adicionarTarefa(){
    let inputTarefa = document.getElementById("inputTarefa");
    let textoTarefa = inputTarefa.value.trim();

    if(textoTarefa === ""){
        alert("Por favor, insira uma tarefa.");
        return;
    }


        let lista = document.getElementById("lista");
        //Antes utilizava innerHTML +=, mas isso causava problemas de desempenho e perda de eventos como checkbox que foram clicados. Agora, utilizo insertAdjacentHTML para adicionar o novo item sem re-renderizar toda a lista.
        lista.insertAdjacentHTML("beforeend", `
            <li class="itemLista" id="tarefa${contador}">
            <div class="conteudoTarefa">
            <input type="checkbox" class="checkbox" id="checkbox${contador}">
                <label for="checkbox${contador}" class="labelTarefa">
                    <div class="numeroTarefa">${contador}</div>. ${textoTarefa}
                </label>
            </div>
                <button class="concluir" onclick="fecharTarefa(${contador})">
                    <i class="bi bi-x-circle fechar"></i>
                </button>
            </li>
            `);
        inputTarefa.value = "";
        contador++;
    }

function fecharTarefa(tarefaId){
    document.getElementById(`tarefa${tarefaId}`).remove();
    atualizarNumeracao();
}

function atualizarNumeracao(){
    let itens = document.querySelectorAll(".itemLista");

    itens.forEach((item, index) => {
        item.querySelector(".numeroTarefa").textContent = index + 1;
    });

    contador = itens.length + 1;
}