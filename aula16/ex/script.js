const numero = Number(prompt("Digite um número: "))
const numeroTitulo = document.getElementById("numero-titulo")
const textoTitulo = document.getElementById("texto")

numeroTitulo.innerHTML = numero
textoTitulo.innerHTML = ""  //  para remover a palavra Texto no HTML
textoTitulo.innerHTML += `<p>A raiz quandrada: ${Math.sqrt(numero)}</p>`
textoTitulo.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
textoTitulo.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
textoTitulo.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}</p>`
textoTitulo.innerHTML += `<p>Arredondando para baixo ${Math.ceil(numero)}</p>`
textoTitulo.innerHTML += `<p>Arredondando para baixo ${numero.toFixed(2)}</p>`
