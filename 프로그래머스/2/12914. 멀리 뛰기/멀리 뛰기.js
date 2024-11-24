function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let jump1 = 1;
    let jump2 = 2;
    let answer = jump2;

    for(let i=3; i<=n; i++) {
        answer = (jump1 + jump2) % 1234567;
        jump1 = jump2;
        jump2 = answer;
    }
    
    return answer;
}