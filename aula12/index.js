let varA = "A"
let varB = "B"
let varC = "C"

console.log(varA, varB, varC)

let varTemp = varA
varA = varB
varB = varC
varC = varTemp

console.log(varA, varB, varC)