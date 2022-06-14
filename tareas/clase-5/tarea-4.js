//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const arr = [];
let numeros = document.querySelectorAll("li");
function conversionEnArray() {
  for (let index = 0; index < numeros.length; index++) {
    arr.push(Number(numeros[index].innerText));
  }
}
conversionEnArray();

function promedio() {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  return sum / arr.length;
}

promedio();

function numeroMenor() {
  let buscarMenor = 0;
  buscarMenor = Math.min(...arr);
  return buscarMenor;
}
numeroMenor();
function numeroMayor() {
  let buscarMayor = 0;
  buscarMayor = Math.max(...arr);
  return buscarMayor;
}
numeroMayor();

$boton = document.querySelector("#calcular-numeros");
$boton.onclick = function () {
  document.querySelector("#promedio").innerText = promedio();
  document.querySelector("#numero-menor").innerText = numeroMenor();
  document.querySelector("#numero-mayor").innerText = numeroMayor();

  return false;
};
