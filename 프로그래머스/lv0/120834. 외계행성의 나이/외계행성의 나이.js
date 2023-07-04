function solution(age) {
    var answer = '';
    
    // 1. 객체로 풀기
//     const translation = {
//         '0': 'a',
//         '1': 'b',
//         '2': 'c',
//         '3': 'd',
//         '4': 'e',
//         '5': 'f',
//         '6': 'g',
//         '7': 'h',
//         '8': 'i',
//         '9': 'j'
//     }
    
//     answer = String(age).split('')
    
    
    
//     return answer.map((v) => translation[v]).join('')
    
// 2. 문자열 인덱싱
    return age.toString().split('').map((v) => 'abcdefghij'[v]).join('')
}