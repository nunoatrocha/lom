//               01234567 
let umaString = "Um Texto"

console.log(umaString[0])  // U
console.log(umaString[1])  // m
console.log(umaString[2])  // 
console.log(umaString[3])  // T
console.log(umaString.charAt(6)) // t
console.log(umaString.indexOf("Texto")) // 3
console.log(umaString.lastIndexOf("o", 3)) // -1
console.log(umaString.length)  // 8

console.log(umaString.replace(/Um/, "Outra"))  //  Outra Texto


let novaString = "O rato roeu a roupa do rei de roma."

console.log(novaString.replace(/r/g, "#"))  //  O #ato #oeu a #oupa do #ei de #oma.


console.log(novaString.slice(2, 6))  // rato
console.log(novaString.slice(-3))  // ma.
console.log(novaString.slice(32))  // ma.


console.log(novaString.split(" "))  /*  
[
    'O',     'rato',
    'roeu',  'a',
    'roupa', 'do',
    'rei',   'de',
    'roma.'
]
                                    */


console.log(novaString.split(" ", 3))   //  [ 'O', 'rato', 'roeu' ]

console.log(novaString.toUpperCase())   //   O RATO ROEU A ROUPA DO REI DE ROMA.