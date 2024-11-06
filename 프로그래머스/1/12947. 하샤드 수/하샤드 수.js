function solution(x) {
    let sum = String(x).split("").map(Number).reduce((acc, cur) => acc + cur);
    
    return x % sum === 0 ? true : false
}