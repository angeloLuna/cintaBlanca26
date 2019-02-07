'use strict'

import { importDeclaration } from "babel-types";

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

console.log(   suma(2, suma(3,9))   )

// console.log(    concat('angelo')      );

// funciones, deben contener return

// hacer una funcion que reciba como parámetro un número, y evalúe si es par o importDeclaration.

















