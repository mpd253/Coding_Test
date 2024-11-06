function solution(arr, divisor) {
    const result = [];
    
    arr.forEach((num) => {
        if (num % divisor === 0) {
            result.push(num);
        }
    })
    
    if (result.length === 0) { result.push(-1); }
    
    result.sort((a, b) => a - b);
    
    return result;
}