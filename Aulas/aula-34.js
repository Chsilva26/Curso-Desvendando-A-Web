const lista = [ 
    {
        nome: 'Carlos',
        idade: 21,
        cartoes: ['3244', '4355']
    },
    {
        nome: 'João',
        idade: 25,
        cartoes: ['3443', '2334']
    },
    {
        nome: 'Maria',
        idade: 54,
        cartoes: ['3454', '9992']
    },
    {
        nome: 'Ana',
        idade: 19,
        cartoes: ['3466', '1111']
    },
    {
        nome: 'Daniel',
        idade: 29,
        cartoes: ['5644', '9635']
    },
    {
        nome: 'Gabriela',
        idade: 16,
        cartoes: ['3564', '6565']
    },
    {
        nome: 'Andreia',
        idade: 85,
        cartoes: ['4567', '4355']
    },
]

const cartoes = lista.flatMap((cartao) => cartao.cartoes)

console.log(cartoes)
