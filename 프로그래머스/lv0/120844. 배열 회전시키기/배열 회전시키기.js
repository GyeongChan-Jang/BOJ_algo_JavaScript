function solution(numbers, direction) {
    var answer = []
    
    // 1. 첫번째 값, 마지막 값 미리 구해서 풀기
//     const last = [...numbers].pop()
//     const first = [...numbers].shift()
    
//     numbers.map((v, i) => {
//         if(direction === 'right') {
//             if(i === 0) {
//             answer.push(last)
//             } 
//             if(i +1 === numbers.length) return
//             answer.push(v)
//         }
//         else if ( direction === 'left') {
//             if(i === 0) return
//             answer.push(v)
//             if(i+1 === numbers.length ) {
//                 answer.push(first)
//             }
            
//         }
//     })
    // return answer
    
    // 2. 뺀 값을 바로 넣어주는 풀이
    if( direction === 'right') {
        numbers.unshift(numbers.pop())
    } else {
        numbers.push(numbers.shift())
    } 
    return numbers
    
    return answer
}