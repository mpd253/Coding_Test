function solution(k, m, score) {
    let answer = 0;
    let result = [];
    
    const sorted = score.sort((a, b) => b - a);
    
    for(let i=0; i < Math.floor(score.length / m); i++) {
        const group = sorted.slice(i*m, (i+1) * m);
        const min = group[m-1];
        answer += min * m;
    }
    
    return answer;
}

// console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
// console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));