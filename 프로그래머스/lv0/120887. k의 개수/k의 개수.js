function solution(i, j, k) {
//     1. 배열을 이용한 내 풀이
//     var answer = 0;
    
//     for(i; i<=j; i++) {
//         let arr = i.toString().split('')
//         if(arr.includes(k.toString())) {
//             answer += arr.filter((v) => v === k.toString()).length
//         }
//     }
    
//     return answer;
    
//     2. 문자열 풀이
    let s = ''
    
    for(i; i<=j; i++) {
        s += i
    }
    
    return s.split(k).length -1
}