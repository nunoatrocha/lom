/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

const hora = Number(prompt("Digite uma hora: "))

if (hora >= 0 && hora < 12) {
    alert("Bom dia!")
}else if (hora < 18) {
    alert("Boa tarde!")
}else {
    alert("Boa noite")
}
