'use strict'

// funciones con ECMA5
// definicion
// function saludo() {
//   console.log("hola")
// }

// ECMA 6

const despedida = () => {
  console.log("bye")
}

const suma = (x, y) => {
  return x + y
}

const concat = (nombre) => {

  let texto = `Hola mi nombre es ${nombre}`
  return texto
}

// console.log(   suma(2, 4)   )

// console.log(    concat('angelo')      );

// funciones, deben contener return

// hacer una funcion que reciba como parámetro un número, y evalúe si es par o impar.

// una funcion que retorne el factorial de cualquier numero que ingresemos como parámetro
// ** Nececitan usar ciclo for

const factorial = (num) => {
  let resultado = 1
  for (let i = 1; i <= num; i++){
    resultado = resultado * i
  }
  return resultado
}

// console.log( factorial(5) )

// 1 * 2 * 3 * 4 * 5












