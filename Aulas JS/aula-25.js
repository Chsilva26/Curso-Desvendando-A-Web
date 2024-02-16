const jose = {
    idade: 25,
    peso: 80,
    nome: 'José',
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    endereco: 'Rua Qualquer',
    numero: 432,
    pais: 'Brasil',
    TemFilhos: true

}

const exibirInformacoes = (pessoa, qualInformacao) => {
    console.log(`${qualInformacao} do ${pessoa.nome}:`, pessoa[qualInformacao])
}

exibirInformacoes(jose, 'genero')