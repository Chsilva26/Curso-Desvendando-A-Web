class Usuario {
    email;
    senha;
    nome;

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;

    }

}

class Administrador extends Usuario {
    permissoes;

    constructor (email, senha, nome, permissoes){
        super(email, senha, nome);
        this.permissoes = permissoes

    }

}

class Comprador extends Usuario {
    compras;

    constructor(email, senha, nome, compras) {
        super(email, senha, nome)
        this.compras = compras
    }
}

const admin = new Administrador('Email@gmail.com', 'Senha', 'José',  [1, 2, 8])

const compradr = new Comprador ('Comprador@gmail.com', '1234', 'Maria', [1])

console.log(admin)

console.log(compradr)