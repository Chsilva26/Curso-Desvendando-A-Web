
class Produto {
    nome;
    preco;
    descricao;
    codigo;
    qtd_estoque

    alterarPreco(novoPreco) {
        if (novoPreco >= 0) {
            this.preco = novoPreco
        }
    }
    addEstoque(quantidade) {
        this.qtd_estoque += quantidade
    }
    removerEstoque(quantidade) {
        if (this.qtd_estoque >= quantidade) {
            this.qtd_estoque -= quantidade
        } else {
            throw new Error ('Quantidade em estoque insuficiente para remoção')
        }
    }
    constructor (nome, descricao, codigo) {
        this.nome = nome;
        this.descricao = descricao;
        this.codigo = codigo
        this.preco = 0
        this.qtd_estoque = 0
    }
}

class Smartphone extends Produto {
    marca;
    modelo;
    sistema_operacional

    descricao() {
        return `
            nome: ${this.nome}
            preço: ${this.preco}
            descrição: ${tihs.descricao}
            código: ${this.codigo}
            quantidade em estoque: ${this.qtd_estoque}
            marca: ${this.marca} \n
            modelo: ${this.modelo} \n
            sistema operacional: ${this.sistema_operacional} \n
        `
    }

    constructor (nome, descricao, codigo, marca, modelo, sistema_operacional) {
        super(nome, descricao, codigo)
        this.marca = marca
        this.modelo = modelo
        this.sistema_operacional = sistema_operacional

    }
}
const smartphone1 = new Smartphone(
    'Iphone',
    'Celular IOS',
    'XBED2132',
    'Apple',
    'Iphone 15',
    'IOS15'
)


smartphone1.alterarPreco(300)
smartphone1.addEstoque(15)
smartphone1.removerEstoque(12)
smartphone1.alterarPreco(60)

console.log(smartphone1)







