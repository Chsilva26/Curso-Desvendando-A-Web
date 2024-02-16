// Funções: como declarar, executar, enviar parametros e receber respostas

function calcular() {
    console.log('Passou');
    console.log(arguments);
}

const calcular2 = function() {
    console.log('Calcular 2');
    return 2;
}

const calcular3 = () => {
    console.log('Calcular 3');
    calcular2();
}
calcular();
calcular2();
calcular3();
