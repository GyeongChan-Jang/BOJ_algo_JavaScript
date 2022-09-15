let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number)

let start = 1
let end = 2e9
let answer = 0
    
while(start <= end) {
  let h = parseInt((start + end) / 2)
  let total = 0
  for(x of arr) {
    if( x > h) total += x-h

  }
  if(total >= m ) { // 충분히 나무를 얻은 경우
    start = h + 1 // 높이를 높이기
    answer = Math.max(h, answer)
  }
  else { // 나무가 부족한 경우
    end = h - 1 // 높이를 낮추기
  }
}
console.log(answer)