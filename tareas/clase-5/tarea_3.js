

const $botonCalular = document.querySelector('#calcular-tiempo-total');



let sumHora = 0;
let sumMin = 0;
let sumSegun = 0;



$botonCalular.onclick = function () {
    
    
    let hora = Number(document.querySelector('#hora').value);
    let minuto = Number(document.querySelector('#minuto').value);
    let segundo = Number(document.querySelector('#segundo').value);
    
    let horaDos =  Number(document.querySelector('#horaDos').value);
    let minutoDos =  Number(document.querySelector('#minutoDos').value);
    let segundoDos = Number(document.querySelector('#segundoDos').value);

    
    
    let resultado = sumHora + " hs " + sumMin + " min " + "segundos " + sumSegun;
    
    document.querySelector('#resultado').textContent = resultado;

    return false;
}

