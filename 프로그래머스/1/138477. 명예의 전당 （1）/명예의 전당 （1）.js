function solution(k, score) {
    const answer = [];
    const kNums = [];
    
    for(let i=0; i<score.length; i++) {
        kNums.push(score[i]);
        kNums.sort((a, b) => b - a);
        
        if(kNums.length > k) {
            kNums.pop();
        }
        
        answer.push(kNums[kNums.length-1]);
    }
    
    return answer;
}