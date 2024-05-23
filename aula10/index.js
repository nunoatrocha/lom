/*  Operadores aritméticos 
*******************************
+  Adição / concatenação
-  Subtração
*  Multiplicação
/  Divisão
%  Resto da divisão
** Potenciação
*******************************
*/

const num1 = 2
const num2 = 5
const num3 = 10

console.log(num1 ** num2)
console.log(num1 + num2 * num3)  //  primeiro vai fazer a multiplicação e só depois a soma -> 2 + (5*10) = 52

let contador = 1
contador ++  // soma 1  ao contador
-- contador  // subtrai 1  ao contador

console.log(contador)

let contador2 = 2

contador2 += 2  // contador2 = contador2 + 2  // contador2 = 2 + 2 = 4

console.log(contador2)  // 4

const x = parseInt("5")  // convert a string "5" para um numero inteir
const y = parseFloat("5.2")  // convert a string "5" para um numero de ponto flutuante (decimal)

console.log(x + y)
