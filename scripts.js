
let contador = 1;

function adicionarTarefa(){
    let inputTarefa = document.getElementById("inputTarefa").value;
    if(inputTarefa === ""){
        alert("Por favor, insira uma tarefa.");
    }else{
        let lista = document.getElementById("lista").innerHTML;
        lista += `
            <li class="itemLista" id="tarefa${contador}">
            <div class="conteudoTarefa">
                <div class="numeroTarefa">${contador}</div>. ${inputTarefa}
            </div>
                <button class="concluir" onclick="fecharTarefa(${contador})">
                    <i class="bi bi-x-circle fechar"></i>
                </button>
            </li>
            `;
        document.getElementById("lista").innerHTML = lista;
        document.getElementById("inputTarefa").value = "";
        contador++;
    }
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