let res = document.getElementById('res')
let num1 = document.getElementById('txtnum1')
let num2 = document.getElementById('txtnum2')


function testar() {
    res.innerHTML = ''
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let total = n1 + n2
    let novo_n = 0
    let soma = 0
   
    if (n1 > n2) {
        total = n1 - n2
    } else if (n2 > n1) {
        total = n2 = n1
    } else if (n1 === n2) {
        total = n1
    }
    while (novo_n < total) {
        if (novo_n % 13 !== 0) {
            soma += novo_n
        }
    novo_n ++
    }
    
res.innerHTML = `A soma é = ${soma}`
} 
/*while (novo_num < total) {
    if (novo_num % 13 !== 0) {
        soma += novo_num
    }
novo_num ++
}
*/