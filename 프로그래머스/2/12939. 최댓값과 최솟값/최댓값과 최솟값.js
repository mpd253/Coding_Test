function solution(s) {
    var answer = '';
    
    var array = s.split(" ").map(Number);
    var maxValue = array[0];
    var minValue = array[0];
    
    for (var i=0; i <= array.length-1; i++) {
        if(array[i] > maxValue) {
            maxValue = array[i];
        }
        if(array[i] < minValue) {
            minValue = array[i];
        }
    }
    
    answer = `${minValue} ${maxValue}`
    
    return answer;
}