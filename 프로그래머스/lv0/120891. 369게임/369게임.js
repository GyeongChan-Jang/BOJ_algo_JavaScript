function solution(order) {
    // var answer = 0;
    
    // 1 배열로 풀기
//     const arr = order.toString().split('')
    
//     arr.map((v, i) => {
//         if(+v % 3 === 0 && +v !== 0) {
//             answer+=1
//         }
//     })
    
//     return answer;
    
    // 2. 정규식으로 풀기
    const answer = order.toString().match(/[369]/g) ?? []
    return answer.length
}