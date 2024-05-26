const nome = prompt("Digite o seu primeiro e último nome: ")

document.body.innerHTML += `O seu nome é: <strong>${nome}</strong><br>`
document.body.innerHTML += `O seu nome tem: <strong>${nome.length}</strong> letras<br>`
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br>`
document.body.innerHTML += `Qual o primeiro índice da letra "o" no seu nome: <strong>${nome.indexOf("o")}</strong><br>`
document.body.innerHTML += `Qual o último índice da letra "o" no seu nome: <strong>${nome.lastIndexOf("o")}</strong><br>`
document.body.innerHTML += `As última 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong><br>`
document.body.innerHTML += `As palavra do seu nome são: <strong>${nome.split(" ")}</strong><br>`
document.body.innerHTML += `O seu nome em maiúsculas é: <strong>${nome.toUpperCase()}</strong><br>`
document.body.innerHTML += `O seu nome em minúsculas é: <strong>${nome.toLowerCase()}</strong><br>`
