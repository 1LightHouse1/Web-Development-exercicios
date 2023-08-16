const principal = document.querySelector("#principal")
const secundario = document.querySelector("#secundario")

let contador = 0;

let contadorSecundario = 0;

principal.addEventListener('click', () =>{

    contador++;

    principal.innerHTML = `Mudando $(contador) vezes`

    const titulo = document.querySelector('h1')

    titulo.style.backgroundColor = 'black'

    console.log('Apertou')

})