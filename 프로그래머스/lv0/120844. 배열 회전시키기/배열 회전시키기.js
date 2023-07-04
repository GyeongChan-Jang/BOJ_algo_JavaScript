function solution(numbers, direction) {
    var answer = []
    
    const last = [...numbers].pop()
    const first = [...numbers].shift()
    
    numbers.map((v, i) => {
        if(direction === 'right') {
            if(i === 0) {
            answer.push(last)
            } 
            if(i +1 === numbers.length) return
            answer.push(v)
        }
        else if ( direction === 'left') {
            if(i === 0) return
            answer.push(v)
            if(i+1 === numbers.length ) {
                answer.push(first)
            }
            
        }
    })
    
    return answer
}