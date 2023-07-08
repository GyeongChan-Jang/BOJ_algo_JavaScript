function solution(s) {
    var answer = '';
    
    let arr = s.split('')
    
    return arr.filter((v) => s.split(v).length === 2).sort().join('')
    
    return answer;
}