function solution(array, height) {
    let result = 0;
    
    for(let i in array) {
        if(array[i] > height) {
            result += 1;
        }
    }
    
    return result;
}