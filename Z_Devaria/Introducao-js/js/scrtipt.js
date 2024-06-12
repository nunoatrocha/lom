const olaMundo = ("Olá Mundo, Introdução JS")
const dataAtual = new Date()

console.log(olaMundo)
console.log(`Data e Hora: ${dataAtual}`)

function mensagem(mensagem) {
    alert(mensagem)
}

function mensagem2() {
    mensagem('Aprendendo funções')
}

const mensagemFinal = (mensagemFinal) => {
    console.log(mensagemFinal)
}

mensagemFinal('Concluímos a execução')
mensagemFinal('Segunda mensagem')
mensagemFinal('Terceira mensagem')
mensagemFinal('Quarta mensagem')

console.log('********************************') // *************************

const verdadeiro = true;
const naoVerdadeiro = !verdadeiro;  //  false
const tudoEVerdadeiro = verdadeiro && naoVerdadeiro;
const tudoEFalso = !verdadeiro && naoVerdadeiro;
const algumEverdadeiro = verdadeiro || naoVerdadeiro;
const algumEFalso = verdadeiro || naoVerdadeiro;

console.log('verdadeiro', verdadeiro);
console.log('naoVerdadeiro', naoVerdadeiro);
console.log('tudoEVerdadeiro', tudoEVerdadeiro);
console.log('tudoEFalso', tudoEFalso);
console.log('algumEverdadeiro', algumEverdadeiro);
console.log('algumEFalso', algumEFalso);


console.log('********************************') // *************************

