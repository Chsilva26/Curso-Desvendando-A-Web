function calcular (valor) {
    if (valor === 0) {
        throw new Error('Não pode ser 0')
    }
    return valor / 2;
}

try {
    const res = calcular(6)
    console.log(`Resultado: ${res}`)
} catch (error) {
    console.log(error.message)
}

console.log(calcular(0))