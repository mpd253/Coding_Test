function solution(d, budget) {
    let answer = 0;
    const sortedArr = d.sort((a, b) => a - b);
    
    for(let i=0; i<sortedArr.length; i++) {
        budget -= sortedArr[i];
        
        if (budget >= 0) answer += 1;
        else return answer;
    }
    return answer;
}