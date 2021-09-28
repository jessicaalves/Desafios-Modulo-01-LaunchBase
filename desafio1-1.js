/* Parte 1: Cálculo de IMC */
const nome = 'Carlos'
const peso = 84
const altura = 1.88;
const sexo = 'Masculino'

imc = peso / (altura * altura)

if(imc >= 30){
    console.log('Carlos, você está acima do peso!')
}

if(imc <= 29.9){
    console.log('Carlos, você não está acima do peso!')
}


/* Parte 2: Cálculo de Aposentadoria*/
const nome = 'Silvana'
const sexo = "Feminino"
const idade = 50
const contribuicao = 25

const calculoAposentadoria = idade + contribuicao

const aposentadoriaMulher = (contribuicao >= 30 && calculoAposentadoria >= 35 && sexo == 'Feminino')
const aposentadoriaHomem = (contribuicao >= 35 && calculoAposentadoria >= 95 && sexo == 'Masculino')


if(aposentadoriaMulher || aposentadoriaHomem){
    console.log(`${nome}, você pode se aposentar!`)
}else{
    console.log(`${nome}, você ainda não pode se aposentar!`)
}

   
