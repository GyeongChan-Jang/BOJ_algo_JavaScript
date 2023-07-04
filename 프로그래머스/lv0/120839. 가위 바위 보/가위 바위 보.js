function solution(rsp) {
    // 가위 - 2
    // 바위 - 0
    // 보 - 5
    
    // 1. if 문으로 풀기
//     var answer = []
    
//     const rspArray = rsp.split('')
    
//     rspArray.map((v, i) => {
//         if(v==='2') {
//             answer.push(0)
//         } else if(v==='0') {
//             answer.push(5)
//         } else if(v==='5') {
//             answer.push(2)
//         }
//     })    
    
//     return answer.join('');
    
    // 2. 객체로 풀기
    
    let answer = {'0': '5', '2': '0', '5': '2'}
    
    return [...rsp].map((v) => answer[v]).join('')
}