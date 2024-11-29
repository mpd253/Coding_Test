function solution(answers) {
    const answer = [];
    
    const ans1 = [1, 2, 3, 4, 5];
    const ans2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const ans3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const ans1Cnt = answers.filter((ans, idx) => ans === ans1[idx % ans1.length]).length;
    const ans2Cnt = answers.filter((ans, idx) => ans === ans2[idx % ans2.length]).length;
    const ans3Cnt = answers.filter((ans, idx) => ans === ans3[idx % ans3.length]).length;
    
    const maxCnt = Math.max(ans1Cnt, ans2Cnt, ans3Cnt);
    
    if(ans1Cnt === maxCnt) {answer.push(1)};
    if(ans2Cnt === maxCnt) {answer.push(2)};
    if(ans3Cnt === maxCnt) {answer.push(3)};
    
    return answer;
}