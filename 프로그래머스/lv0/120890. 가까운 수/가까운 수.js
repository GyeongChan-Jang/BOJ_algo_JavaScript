function solution(array, n) {
    var answer = 0;
    
    // n - v가 가장 작은 수 = 가장 가까운 수

    let near = []
    
    
    
    near = array.sort((a, b) => a - b).map((v) => Math.abs(n-v))
    
    let small = Math.min(...near)
    
    return array[near.findIndex((v) => v === small)]
    
    
    
    // return array[near.findIndex((v) => {
    //     v === Math.min(...array)
    // })]
    
    
}