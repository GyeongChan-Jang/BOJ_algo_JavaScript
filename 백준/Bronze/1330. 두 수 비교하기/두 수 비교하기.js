let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

const value = input[0].split(' ')
const A = Number(value[0])
const B = Number(value[1])

if(A > B) console.log('>')
else if (A < B) console.log('<')
else console.log('==')