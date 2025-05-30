function solution(numbers) {
    let numbersSum = 0; 
    
    for(let i=0; i<numbers.length; i++) {
        numbersSum += numbers[i]
    }
    
    return numbersSum / numbers.length;
}