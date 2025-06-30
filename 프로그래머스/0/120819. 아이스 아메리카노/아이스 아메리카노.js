function solution(money) {
    const coffee = 5500;
    
    const glass = Math.floor(money / coffee);
    const change = money % coffee;
    
    return [glass, change];
}