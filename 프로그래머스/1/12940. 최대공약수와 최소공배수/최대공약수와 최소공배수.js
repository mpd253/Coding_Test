function solution(n, m) {
    const gcd = (a, b) => {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    const gcdValue = gcd(n, m);
    const lcmValue = (n * m) / gcdValue;
    
    return [gcdValue, lcmValue]
}