const inputBotao = document.getElementById("buttonInput");
const parentDiv = document.querySelector("#eventsDiv");
let eventos = [];

inputBotao.addEventListener("click", () => {
    const valorTexto = document.getElementById("eventInput").value;
    const valorData = document.getElementById("dateInput").value;
    if (valorData && valorTexto){
        adicionarEvento(valorTexto, valorData);
        document.getElementById("eventInput").value = '';
        document.getElementById("dateInput").value = '';    
    }
    console.log(eventos);
})

function adicionarEvento(texto, data) {
    eventos.push({ nome: texto, data: new Date(data) });
    eventos.sort((a, b) => a.data - b.data);
    mostrarEventos();
}

function mostrarEventos() {
    parentDiv.replaceChildren(); 
    eventos.forEach(element => {
        const divEvento = document.createElement("div");
        divEvento.classList.add("events");
        let dataFormatada = formatarData(element.data);
        divEvento.textContent = `Evento: ${element.nome}, Horário: ${dataFormatada}`;
        parentDiv.appendChild(divEvento);
    })
    
}

function formatarData(data) {
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1; // +1 porque retorna o mes de 0 a 11
    let dia =  data.getDate();
    
    let horas = data.toLocaleTimeString();

    return `${dia}/${mes}/${ano}, ${horas}`;
}




