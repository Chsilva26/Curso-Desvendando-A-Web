let r = document.getElementById('res')
let num1 = document.getElementById('txtnum1')
let num2 = document.getElementById('txtnum2')

function testar() {
  let n1 = Number(num1.value)
  let n2 = Number(num2.value)
  let maior = 0
  let menor = 0
  let soma = 0

  if (n1 > n2) {
      maior = n1
      menor = n2
  } else {
      maior = n2
      menor = n1
  }
  for (menor; menor <= maior; menor++) {
    if (menor % 13 !== 0) {
      soma += menor
    }
  }
  
    r.innerHTML = soma
}