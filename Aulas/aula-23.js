const fatorial = (valor) => {
    if (valor === 0 || valor === 1) {
        return 1
    } else {
    return valor * fatorial(valor - 1)
    }
}

console.log(fatorial(0))