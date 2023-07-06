function solution(i, j, k) {
    var answer = 0;
    
    for(i; i<=j; i++) {
        let arr = i.toString().split('')
        if(arr.includes(k.toString())) {
            answer += arr.filter((v) => v === k.toString()).length
        }
    }
    
    return answer;
}