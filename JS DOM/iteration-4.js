// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const myPokemons = document.querySelectorAll('.pokemon');
for (const pokemon of myPokemons) {
    console.log(pokemon);
}