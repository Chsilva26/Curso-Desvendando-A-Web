
let res = document.getElementById("res")
let consumo = document.getElementById("txtconsumo")
let distancia = document.getElementById("txtdistancia")
let resultado = 0

function gastoCombustivel() {
    let c = Number(consumo.value)
    let d = Number(distancia.value)
    let r = Number(resultado.value)
    r = d / c
    res.innerHTML = ''
    res.innerHTML += (`Serão Necessários ${r.toFixed(3)} Litros Para a Viagem`)     
}
