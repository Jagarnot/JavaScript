var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} Horas`)
if (hora == 24 || hora < 12) {
    console.log('Bom dia')
} else if (hora >= 12 && hora < 18 ) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora < 24 ) {
    console.log('Boa noite')
} else if (hora > 24) {
    console.log('Este horário não exite')
}
