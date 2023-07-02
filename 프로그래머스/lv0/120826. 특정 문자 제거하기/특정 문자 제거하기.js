function solution(my_string, letter) {
    var answer = '';
    
    let stringArr = my_string.split('')
    
    
    
    return stringArr.filter((v) => v !== letter).join('')
}