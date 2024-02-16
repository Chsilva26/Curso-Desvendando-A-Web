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

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {})

console.log(pessoas)