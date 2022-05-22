//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

const myButton = document.querySelector('#btnToClick');

/* myButton.addEventListener('click', fuction(e){
    console.log(e);
}); */

myButton.addEventListener('click', myButtonClick);

function myButtonClick(e){
    console.log(e);
}