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
//PRIMEIRA FORMA
/*let soma = 0

for(let i = 0; i < lista.length; i++) {
    soma += lista[i].idade
}*/

//SEGUNDA FORMA
//lista.forEach((objeto) => console.log('Nome:',objeto.nome ))

//TERCEIRA FORMA
let soma = 0

const somaIdade = (objeto) => {
    soma += objeto.idade
}

lista.forEach(somaIdade)

console.log(`Soma: ${soma}`)
