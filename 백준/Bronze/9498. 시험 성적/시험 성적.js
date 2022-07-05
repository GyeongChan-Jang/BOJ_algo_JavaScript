let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const score = Number(input[0])

if(score <= 100 && score >= 90) console.log('A')
else if(90 > score && score >= 80) console.log('B')
else if(80 > score && score >= 70) console.log('C')
else if(70 > score && score >= 60) console.log('D')
else console.log('F')