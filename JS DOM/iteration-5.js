// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".

const mySpans = document.querySelectorAll('[data-function="testMe"]');

for (var i = 0; i < mySpans.length; i++){
const span = mySpans[i];
console.log(span);
};