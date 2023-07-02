function solution(numbers) {
    var answer = 0;
    
    let count = numbers.length
    
    let sum = numbers.reduce((a, c) => a + c)
    
    answer = sum / count
    
    return answer;
}