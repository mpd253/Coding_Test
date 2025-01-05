function solution(n) {
    const trinary = n.toString(3);
    const reverseTri = trinary.split("").reverse().join("");
    
    return parseInt(reverseTri, 3);
}