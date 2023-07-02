function solution(s1, s2) {
    var answer = 0;
    
    s1.map((v) => {
        s2.map((v2) => {
            if(v === v2) {
                answer++
            }
        })
    })
    
    
    
    return answer;
}