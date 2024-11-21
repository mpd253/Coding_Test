function solution(arr) {
    const minValue = Math.min(...arr);
    const filterArr = arr.filter(num => num !== minValue);
    
    if(filterArr.length === 0) {
        return [-1];
    } else {
        return filterArr;
    }    
}