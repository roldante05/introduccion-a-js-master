$botonEnviar = document.querySelector("#calcular_tiempo");
$botonEnviar.onclick = function () {
  const hora = Number(document.querySelector("#txtHora").value);
  const minuto = Number(document.querySelector("#txtMinuto").value);
  const segundo = Number(document.querySelector("#txtSegundo").value);

  const horaDos = Number(document.querySelector("#txtHoraDos").value);
  const minutoDos = Number(document.querySelector("#txtMinutoDos").value);
  const segundoDos = Number(document.querySelector("#txtSegundoDos").value);

  let sumHora = hora + horaDos;
  let sumMin = minuto + minutoDos;
  let sumSeg = segundo + segundoDos;

  if (sumMin >= 60) {
    sumHora += sumMin / 60;
    sumMin = sumMin - sumMin;
  } else {
    sumMin;
  }

  if (sumSeg >= 60) {
    sumMin = sumSeg / 60;
    sumSeg = sumSeg - sumSeg;
  } else {
    sumSeg;
  }

  document.querySelector("#hor-total").value = sumHora.toFixed();
  document.querySelector("#min-total").value = sumMin.toFixed();
  document.querySelector("#seg-total").value = sumSeg.toFixed();

  return false;
};
