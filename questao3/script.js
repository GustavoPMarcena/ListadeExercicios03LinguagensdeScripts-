const inputBotao = document.getElementById("buttonInput");
const parentTable = document.querySelector("#transactionBody");
const somaTransacoes = document.getElementById("transactionSum");
let transacoes = [];

class Transacao {
    constructor(descricao, valor) {
        this.descricao = descricao;
        this.valor = valor;
    }
}

inputBotao.addEventListener("click", (e) => {
    e.preventDefault();
    const valorDescricao = document.getElementById("descriptionInput").value;
    const valorDinheiro = document.getElementById("valueInput").value;
    if (valorDescricao && valorDinheiro){
        adicionarTransacao(valorDescricao, valorDinheiro);

        document.getElementById("descriptionInput").value = '';
        document.getElementById("valueInput").value = '';
    }
});

function adicionarTransacao(descricao, valor) {
    transacoes.push(new Transacao(descricao, valor));
    exibirTransacao();
}

function exibirTransacao() { 
    let classeTransacao;
   
    const valorNovaTransacao = transacoes[transacoes.length-1];
    // Checa se o saldo é positivo/negativo e coloca sua respectiva classe
    classeTransacao = (valorNovaTransacao.valor >= 0) ? 'transacaoPositiva' : 'transacaoNegativa';

    const novaTransacao = document.createElement("tr");
    novaTransacao.classList.add(classeTransacao);
    const descricaoTransacao = document.createElement("td");
    descricaoTransacao.textContent = `${valorNovaTransacao.descricao}`;
    const valorTransacao = document.createElement("td");
    valorTransacao.textContent = `${valorNovaTransacao.valor}`;

    novaTransacao.appendChild(descricaoTransacao);
    novaTransacao.appendChild(valorTransacao);
    parentTable.appendChild(novaTransacao);

    const somaTotalTransacoes = transacoes.reduce((acumulador, transacao) => {
        return acumulador + parseFloat(transacao.valor);
    }, 0);

    somaTransacoes.textContent = `R$ ${somaTotalTransacoes}`;
    console.log(transacoes)
}
