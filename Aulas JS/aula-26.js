const lista = [ 
    {
        nome: 'Carlos',
        idade: 21
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

const converterObjeto = (objeto) => {
    return {
        ...objeto,
        //nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}

console.log('Nomes:',lista.map(converterObjeto))