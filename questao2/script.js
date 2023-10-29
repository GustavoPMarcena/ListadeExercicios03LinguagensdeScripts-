const inputBotao = document.getElementById("buttonInput");
const parentDiv = document.querySelector("#clientsDiv");
let clientes = [];

class ClienteBanco {
    constructor(nome, documento, saldo) {
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    }
    depositar() {
        this.saldo = parseFloat(this.saldo) + 100;
    }
    retirar() {
        this.saldo = parseFloat(this.saldo) - 100;
    }
}

// Reutilizado da primeira questão para apenas enviar quando tiver valores 
inputBotao.addEventListener("click", (e) => {
    e.preventDefault();
    const valorNome = document.getElementById("nameInput").value;
    const valorDocumento = document.getElementById("documentInput").value;
    const valorSaldo = document.getElementById("balanceInput").value;
    if (valorNome && valorDocumento && valorSaldo){
        adicionarCliente(valorNome, valorDocumento, valorSaldo);

        document.getElementById("nameInput").value = '';
        document.getElementById("documentInput").value = '';
        document.getElementById("balanceInput").value = ''; 
    }
    

});

function adicionarCliente(nome, documento, saldo) {
    clientes.push(new ClienteBanco(nome, documento, saldo));
    listarClientes();
}

function listarClientes() {
    parentDiv.replaceChildren();

    clientes.forEach((element, id) => {  // Fazendo a inserção com DOM
        const novaDiv = document.createElement("div");
        const botaoDepositar = document.createElement("button");
        const botaoRetirar = document.createElement("button");
        const textoNome = document.createElement("p")
        textoNome.textContent = `Nome: ${element.nome}`;
        const textoDocumento = document.createElement("p")
        textoDocumento.textContent = `Documento: ${element.documento}`;
        const textoSaldo = document.createElement("p")
        textoSaldo.textContent = `Saldo: ${element.saldo}`;

        botaoDepositar.textContent = "Depositar 100";
        botaoDepositar.onclick = () => {
            element.depositar();
            listarClientes();
        }
        botaoRetirar.textContent = "Sacar 100";
        botaoRetirar.onclick = () => {
            element.retirar();
            listarClientes();
        }

        const divTexto = document.createElement("div");
        divTexto.appendChild(textoNome);
        divTexto.appendChild(textoDocumento);
        divTexto.appendChild(textoSaldo);

        const divBotoes = document.createElement("div");
        divBotoes.appendChild(botaoDepositar);
        divBotoes.appendChild(botaoRetirar);



        novaDiv.appendChild(divTexto);
        novaDiv.appendChild(divBotoes);
        novaDiv.classList.add("clientes");

        parentDiv.appendChild(novaDiv);
        

    });
    console.log(clientes);
}


