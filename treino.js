const nome = "Giovanna Oliveira";


function getEventoAleatorio(){

    const numeroAleatorio = Math.floor(Math.random() * 3);
    if (numeroAleatorio === 0) {
        return "Maratona";
      } else if (numeroAleatorio === 1) {
        return "Triathlon";
      } else {
        return "Pentathlon";
      }
}


function getDiasTreino(evento){
    let dias = 0
    if (evento === "Maratona"){
        dias = 50
    }

    else if (evento === "Triathlon"){
        dias = 100
    }

    else{
        dias = 200
    }

    return dias
}

const resultado = getEventoAleatorio()
const dias = getDiasTreino(resultado)

function logEvento(nome, resultado){
    console.log(`${nome} você vai participar do evento: ${resultado}.`)
}

function logTempo(nome, dias){
    console.log(`${nome} você vai treinar por ${dias} dias.`)
}

logEvento(nome, resultado)
logTempo(nome, dias)






