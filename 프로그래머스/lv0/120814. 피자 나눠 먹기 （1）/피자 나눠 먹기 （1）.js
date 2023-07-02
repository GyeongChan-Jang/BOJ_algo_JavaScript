function solution(n) {
    var answer = 0;
    
    if( n <= 7) return 1
    
    if( n % 7 > 0){
        
            return ~~(n / 7) + 1
        
    } else if( n % 7 === 0) return n / 7

    
    
    return answer;
}