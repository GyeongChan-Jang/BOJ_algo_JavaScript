let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)

const [a, b, c] = [...input]

const printAnswer = (a, b, c) => {
  if(a === b && b === c && a === c) {
    return console.log(10000 + (a * 1000))
  }

  if( a !== b || a !== c || b !== c) {
    if(a === b || a === c) console.log(1000 + (100 * a))
    if(b === c) console.log(1000 + (100 * b))
  }

  if(a !== b && a !== c && b !== c) {
    console.log(Math.max(a, b, c) * 100) 
  }
}

printAnswer(a, b, c)