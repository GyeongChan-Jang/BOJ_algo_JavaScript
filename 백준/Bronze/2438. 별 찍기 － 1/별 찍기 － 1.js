let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])

let answer = ''
let star = ''

for(let i = 1; i <= n; i ++) {
  star += "*"
  answer += star + '\n'
}

console.log(answer)