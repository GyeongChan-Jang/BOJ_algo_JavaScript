function solution(my_string) {
    // 1. 내 풀이
//     var answer = '';  
//     let s = new Set(my_string)
 
//     s.forEach((v) => answer+=v)
    // return answer;
    
    // 2. Set을 배열로 풀이
    return [...new Set(my_string)].join('')

    
}