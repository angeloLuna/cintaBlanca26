// let titulo = document.getElementById('titulo')
// let parrafo = document.getElementById('parrafo')
// let boton = document.getElementById('boton')

// // titulo.innerHTML = "titulo cambiado"

// // parrafo.innerHTML = "parrafo cambiado"

// const cambiaTitulo = () => {
//   titulo.innerHTML = "titulo cambiado"
// }

// boton.addEventListener('click', cambiaTitulo)

// // Funcion anonima
// // boton.addEventListener('click', () =>{
// //   console.log("holi")
// // })
// ------------------------------------

let input = document.getElementById('input')
let mostrar = document.getElementById('mostrar')
let boton = document.getElementById('boton')


const cambiarNombre = () => {

  let textoInput = input.value

  mostrar.innerHTML = textoInput


}



boton.addEventListener('click', cambiarNombre)














