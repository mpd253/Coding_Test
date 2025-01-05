function solution(s) {
    let answer ='';
    let str = '';
    const engNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(let i=0; i<s.length; i++) {
        // 숫자인 경우
        if(!isNaN(s[i])) { answer += s[i]; }
        else {
            str += s[i];
            const idx = engNumbers.indexOf(str);
            if(idx !== -1) {
                answer += idx;
                str = '';
            } 
        }
    }
    return Number(answer);
}