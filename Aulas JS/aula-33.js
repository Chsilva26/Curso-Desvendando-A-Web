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

const resultadosSome = lista.some((obejto) => obejto.idade > 100)

const resultadoEvery = lista.every((objeto) => objeto.idade > 10)

console.log(`Resultado: ${resultadosSome}`)

console.log(`Resultado: ${resultadoEvery}`)