// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const myInput = document.querySelector('input');

myInput.addEventListener('focus', fuction(e)){
    console.log(myInput.value);
}