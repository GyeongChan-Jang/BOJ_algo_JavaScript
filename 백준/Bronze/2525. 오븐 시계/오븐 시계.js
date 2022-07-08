let fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().split('\n')

curTime = input[0].split(' ')
let h = Number(curTime[0])
let m = Number(curTime[1])
let n = Number(input[1])

const currentHour = h
const currentMinute = m
const cookTime = n

const takeHour = parseInt((currentMinute + cookTime) / 60)
const takeMinute = (currentMinute + cookTime) % 60

let cookEndHour = (currentHour + takeHour)
const cookEndMinute = takeMinute

if(cookEndHour >= 24) {
  cookEndHour -= 24
  console.log(cookEndHour + ' ' + cookEndMinute)
} else {
  console.log(cookEndHour + ' ' + cookEndMinute)
}