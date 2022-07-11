let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])

let answer = ''

for(let i = 1; i <= n; i ++) {
  let [a, b] = input[i].split(' ').map(Number)
  answer += `Case #${i}: ${a} + ${b} = ${a + b}` + '\n'
}

console.log(answer)