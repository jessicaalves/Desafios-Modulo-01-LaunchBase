/* Parte 1: Construção e Impressão de Objetos */

const empresa = {
    nome : "Rocketseat",
    cor : "Roxo",
    foco : "Programação",
    endereco : "Rua Guilherme Gembala, Número: 260."
};

console.log(`A empresa ${empresa.nome}, está localizada no seguinte endereço: ${empresa.endereco}`) 


/* Parte 2: Vetores e Objetos */

const dadosProgramador = {
        nome: "Jéssica",
        idade: 26
    };

const tecnologias = {
        propriedade:[
            { nome: 'C++', especialidade: 'Desktop' },
            { nome: 'Python', especialidade: 'Data Science' },
            { nome: 'JavaScript', especialidade: 'Web/Mobile' } 
        ]};
        
console.log(`A usuária ${dadosProgramador.nome} tem ${dadosProgramador.idade} anos e usa a tecnologia ${tecnologias.propriedade[0].nome} com especialidade em ${tecnologias.propriedade[0].especialidade}.`)