const lista = [ 
    {
        nome: 'Carlos',
        idade: 21,
        exibir: true,
    },
    {
        nome: 'João',
        idade: 25
    },
    {
        nome: 'Maria',
        idade: 54
    },
    {
        nome: 'Ana',
        idade: 19
    },
    {
        nome: 'Daniel',
        idade: 29
    },
    {
        nome: 'Gabriela',
        idade: 16
    },
    {
        nome: 'Andreia',
        idade: 85
    },
]

//const listFiltrada = lista.filter((pessoa) => pessoa.idade > 20)

const filtrarPessoa = (pessoa) => pessoa.nome === 'Maria'

const listFiltrada = lista.filter(filtrarPessoa)

console.log(lista)

console.log(listFiltrada)