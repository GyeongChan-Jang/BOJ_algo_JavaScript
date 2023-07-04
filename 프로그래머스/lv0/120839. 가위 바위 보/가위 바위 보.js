function solution(rsp) {
    var answer = []
    
    // 가위 - 2
    // 바위 - 0
    // 보 - 5
    
    const rspArray = rsp.split('')
    
    rspArray.map((v, i) => {
        if(v==='2') {
            answer.push(0)
        } else if(v==='0') {
            answer.push(5)
        } else if(v==='5') {
            answer.push(2)
        }
    })    
    
    return answer.join('');
}