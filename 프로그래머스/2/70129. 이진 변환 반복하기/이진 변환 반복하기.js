function solution(s) {
    let answer = [0, 0];
    let sLength = 0;
    
    while (s.length > 1) {
        sLength = s.length;
        answer[0]++;
        
        s = s.split("0").join("");
        
        answer[1] += (sLength - s.length);
        s = s.length.toString(2);
    }
    
    return answer;
}