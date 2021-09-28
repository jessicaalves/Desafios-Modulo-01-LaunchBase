/* Parte 1: Usuários e Tecnologias */
const usuarios = [
    {
        nome: "Jéssica",
        tecnologias: ["HTML", " CSS"]
    },

    {
        nome: "Simone",
        tecnologias: ["JavaScript", " CSS"]
    },

    {
        nome: "Francisco",
        tecnologias: ["HTML", " Node.js"]
    }

]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`);
}


/* Parte 2: Busca por Tecnologia */
function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') {
            return true;
        } else {
            return false;
        }

    }

}


for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCss = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCss) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}
 















