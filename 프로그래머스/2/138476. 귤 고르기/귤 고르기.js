function solution(k, tangerine) {
    const count = {};
    
    tangerine.forEach(size => {
        count[size] = (count[size] || 0) + 1;
    });
    
    const sortedArr = Object.values(count).sort((a, b) => b - a);
    
    let sum = 0;
    let type = 0;
    
    for(let num of sortedArr) {
        sum += num;
        type++;
        if(sum >= k) {
            break;
        }
    }
    
    return type;
}