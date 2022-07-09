let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])
let answer = ''

for(let i = 1; i <= n; i++) {
  let num = input[i].split(' ')
  answer += Number(num[0]) + Number(num[1]) + "\n"
}

console.log(answer)