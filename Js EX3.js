var idade = 16
if (idade >= 18 && idade <= 66) {
    console.log('Você tem a obrigação de votar ou justificar')
} else if (idade >= 16 && idade < 18) {
    console.log('Você tem a opção de votar (Não é obrigatório!!)')
} else if (idade < 16) {
    console.log('Você não pode votar ainda não tem idade de 16 anos minima!!')
} else if (idade >= 67) {
    console.log('Você não é mais obrigado a votar!!')
}