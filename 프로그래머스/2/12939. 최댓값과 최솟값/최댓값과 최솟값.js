function solution(s) {
    const numbers = s.split(" ").map(Number);
    
    let min = numbers[0];
    let max = numbers[1];
    
    for(const num of numbers) {
        if(min > num) min = num;
        if(max < num) max = num;
    }
    
    return `${min} ${max}`;
}

solution("1,2,3,4");