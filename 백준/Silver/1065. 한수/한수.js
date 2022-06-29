let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

function oneNumber(x) {
  if(x.length === 1) return true
  else if(x.length === 2) return true
  else if(x.length === 3) {
    let dif = Number(x[0]) - Number(x[1])
    if( dif !== Number(x[1]) - Number(x[2])) return false
    else return true
  }
  return false
}

let n = Number(input[0])
let answer = 0
for(let x = 1; x <= n; x++) {
  if(oneNumber(x + "")) answer++
}
console.log(answer)