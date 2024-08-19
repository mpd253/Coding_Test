function solution(n) {
    var answer = 0;
    
    let nString = n.toString(2);
    let nLen = nString.split('1').length;
    
    while(true) {
        n++;
        if (n.toString(2).split('1').length === nLen) {
            answer = n;
            return answer;
        }
    }
}
