function solution(n) {
    const number = Number(String(n).split("").sort((a, b) => b - a).join(''));
    
    return number;
}