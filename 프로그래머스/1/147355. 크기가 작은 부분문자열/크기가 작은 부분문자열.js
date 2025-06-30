function solution(t, p) {
    var answer = 0;
    
    for(let i=0; i <= t.length - p.length; i++) {
        let tNum = t.substr(i, p.length);
        
        if(tNum <= p) answer++;
    }
    return answer;
}