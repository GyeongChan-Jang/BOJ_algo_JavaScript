function solution(spell, dic) {
    let answer = 0
    
    let sortedSpell = [...spell].sort().join('')
    
    for (let i = 0; i < dic.length; i++) {
        let sorted = dic[i].split('').sort().join('')
        if(sortedSpell === sorted) {
            answer = 1
            if(answer === 1) {
                return answer
            }
        } else answer = 2
    }
    
    return answer
 
}