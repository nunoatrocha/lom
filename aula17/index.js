const alunos = ["Nuno", "Maria", "João", "Pedro"]
console.log(alunos)
console.log(alunos[1])
console.log(alunos.length)
alunos[alunos.length] = "Diana"
console.log(alunos)
alunos.push("Ricado")  // Adiciona no fim
alunos.unshift("Ana")  // Adiciona no inicio
console.log(alunos)
alunos.pop()  //  remove o ultimo elemento e pode salvar esse element a ser removido
const removido = alunos.pop()
alunos.shift() //  remove o primeiro elemento e pode salvar esse element a ser removido
console.log(alunos.slice(0, 2))


function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(2, 4))
