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

lista.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1
    }
    if (a.idade > b.idade) {
        return 1
    }
    return 0
})

console.log(lista)

lista.sort((a, b) => {
    if(a.nome.toUpperCase() < b.nome.toUpperCase()) {
        return -1
    }
    if (a.nome.toUpperCase() > b.nome.toUpperCase()) {
        return 1
    }
    return 0
})

console.log(lista)