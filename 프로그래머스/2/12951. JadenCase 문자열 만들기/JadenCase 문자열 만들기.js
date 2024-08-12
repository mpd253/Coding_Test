function solution(s) {
    var array = s.split(' ');
    
    let answer = array.map((idx) => {
        return idx.charAt(0).toUpperCase() + idx.slice(1).toLowerCase();
    });
    
    return answer.join(' ');
}