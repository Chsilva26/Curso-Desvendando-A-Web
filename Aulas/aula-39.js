const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: true, // Se estiver true => usuario.nome = 'novo nome'
    configurable: false, // Se estiver true => posso deletar o nome
    enumerable: true, //Se estiver true => ele será exibido no objeto
    
})

class Usuario {
   

    constructor(email, senha, nome) {
        Object.defineProperties(this, {
            nome: {
                get: () => nome,
                set: (value) => nome = value
            },
            senha: {
                get: () => senha,
                set: (value) => {
                    if (value.length < 4) {
                        throw new TypeError('Precisa de pelo menos 4 letras')
                    }
                }
            },
            email: {
                get: () => email,
                set: (value) => email = value
            }
        })
    }
}

const usuario = new Usuario('Emails', 'Senhas', 'Nomes')
usuario.senha = 'abcdr'

console.log(usuario.nome, usuario.email)

console.log(usuario.senha)