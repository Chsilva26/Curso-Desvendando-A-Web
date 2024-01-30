let res = document.getElementById('res')
let number = document.getElementById('txtnum')
function testar() {
  res.innerHTML = ``
  let n = Number(number.value)
  let contar = 0
  while (contar < 6 ) {
    
    if (n % 2 !== 0 ){
      
      res.innerHTML += `${n}\n`
      contar ++
    }
    n++
    
  }
    
}
/*while (contar < 6) {
      
        /*if (num % 2 !=0) {
          num =+ num 
          r.innerHTML = `${num}-->`  
        }
        
    
    contar += 1
    }*/