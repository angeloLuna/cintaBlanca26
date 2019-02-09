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

// let input = document.getElementById('input')
// let mostrar = document.getElementById('mostrar')
// let boton = document.getElementById('boton')


// const cambiarNombre = () => {

//   let textoInput = input.value

//   mostrar.innerHTML = textoInput

// }



// boton.addEventListener('click', cambiarNombre)

// -----------------------------

// Inputs
let nombre = document.getElementById('nombre')
let email = document.getElementById('email')
let pizza = document.getElementById('pizza')

// Etiquetas de texto
let mostrarNombre = document.getElementById('mostrarNombre')
let mostrarEmail = document.getElementById('mostrarEmail')
let mostrarPizza = document.getElementById('mostrarPizza')

let boton = document.getElementById('boton')

// console.log(nombre)
// console.log(email)
// console.log(pizza)
// console.log(mostrarNombre)
// console.log(mostrarEmail)
// console.log(mostrarPizza)
// console.log(boton)

const mostrar = () => {

  let textoNombre = nombre.value
  let textoEmail = email.value
  let textoPizza = pizza.value

  mostrarNombre.innerHTML = textoNombre
  mostrarEmail.innerHTML = textoEmail
  mostrarPizza.innerHTML = textoPizza

}

boton.addEventListener('click', mostrar)













