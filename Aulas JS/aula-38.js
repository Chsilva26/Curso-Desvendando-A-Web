//Object.defineProperties (Varias Propriedades)
//Object.defineProperty (Somente uma propriedade)


const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: true, // Se estiver true => usuario.nome = 'novo nome'
    configurable: false, // Se estiver true => posso deletar o nome
    enumerable: true, //Se estiver true => ele será exibido no objeto
    
})

class Usuario {
   

    constructor(email, senha, nome) {
        Object.defineProperties(this, {
            nome: propriedadePadrao(nome),
            senha: propriedadePadrao(senha),
            email: propriedadePadrao(email)
        })
    }
}

const usuario = new Usuario('Emails', 'Senhas', 'Nomes')
usuario.nome = 'Novo nome'

console.log(usuario)