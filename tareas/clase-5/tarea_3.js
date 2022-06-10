
$botonEnviar = document.querySelector('#calcular_tiempo');
$botonEnviar.onclick = function(){
 
let hora = Number(document.querySelector('#txtHora').value);
let minuto = Number(document.querySelector('#txtMinuto').value);
let segundo = Number(document.querySelector('#txtSegundo').value);

let horaDos = Number(document.querySelector('#txtHoraDos').value);
let minutoDos = Number(document.querySelector('#txtMinutoDos').value);
let segundoDos = Number(document.querySelector('#txtSegundoDos').value);

 let sumHora = hora + horaDos;
 let sumMin = minuto + minutoDos;
 let sumSeg = segundo + segundoDos;



 if(sumMin >= 60){
     sumHora +=  sumMin / 60;
     sumMin = sumMin - sumMin;
    
 } 
    else{
        sumMin;
    }
    

 if(sumSeg >= 60){
     sumMin = sumSeg  / 60 ;
     sumSeg = sumSeg - sumSeg;

    } 
    else {
        sumSeg;
    }

    

document.querySelector('#hor-total').value = sumHora;
document.querySelector('#min-total').value = sumMin ;
document.querySelector('#seg-total').value = sumSeg ;


    return false;
}