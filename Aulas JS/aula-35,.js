class Pessoa {
    nome;
    idade;
    filhos;

    quantosFilhos() {
        if(this.filhos) {
            return this.filhos.length
        }
        return 0
    }

    constructor(nome, idade, filhos) {
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;

    }
}

const filho1 = new Pessoa('Gustavo', 13)
const filho2 = new Pessoa('Julia', 16)

const pessoa = new Pessoa('José', 53,[filho1, filho2])

console.log(pessoa)

console.log(`Quantidade de Filhos: ${pessoa.quantosFilhos()}`)