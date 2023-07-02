function solution(n, k) {
    var answer = 0;
    
    if(n < 10) {
        answer = (12000 * n) + (2000 * k)
    } else {
        let service = Math.floor(n /10)
        answer = (12000 * n) + (2000 * k) -(2000 * service)
    }
    
    return answer;
}