let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])
let answer = ''

for(let i = n; i >= 1; i--) {
  answer += i + '\n'
}

console.log(answer)