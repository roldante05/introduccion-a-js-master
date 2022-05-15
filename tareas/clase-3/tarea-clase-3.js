// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

let nombre = prompt('Como te llamas?').toLocaleLowerCase();

if (nombre == "dante") {
    alert('Hola, Tocayo! Yo tambien me llamo "Dante" ');
} else if (nombre == "ignacio") {
    alert('Hola ignacio, te llamas igual que mi hermano');
} else {
    alert('Hola ' + nombre);
}
    

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

let edad = Number(prompt('Cual es tu edad?'));

if(edad > 20){
    alert('Sos mayor que yo');
} else if (edad == 20) {
    alert('Tenemos la misma edad :)');
} else {
    alert('Sos menor que yo ');
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let dni = prompt('Tenes documento?').toLocaleLowerCase();
if (dni == "si") {
    let edad = Number(prompt('Cual es tu edad?'));
    if (edad >= 18) {
        alert('Podes pasar al bar');
    } else {
        alert('No podes pasar al bar');
    }
} else if (dni == "no") {
    alert('No podes entrar al bar sin documento');
} else {
    alert('No entendi tu respuesta')
}
