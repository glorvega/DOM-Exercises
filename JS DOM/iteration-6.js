//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".


const mySpans = document.querySelectorAll('[data-function="testMe"]');

for (var i = 0; i < mySpans.length; i++){
const mySpan = mySpans[2];
console.log(mySpan);
};