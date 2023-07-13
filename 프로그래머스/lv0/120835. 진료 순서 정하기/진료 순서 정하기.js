function solution(emergency) {
    let answer =[]
    
    // 깊은 복사를 할 것
    const arr = emergency.slice().sort((a,b) => b-a)
    
    return emergency.map((v) => arr.indexOf(v)+1)
}