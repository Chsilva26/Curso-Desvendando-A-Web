const sleep = async (ms) => {
    return new Promise (resolve => setTimeout(resolve, ms))
}
const aguardarComRetorno = async () => {
    await sleep(3000)
    return 30
}

const aguardar = async () => {
    console.log('Passou ', 1 + 5)
    const resultado = await aguardarComRetorno()
    console.log('Resultado', resultado)
    console.log('Passou ', 2 + 3)
    console.log('Passou ', 7 + 5)
}

aguardar() 