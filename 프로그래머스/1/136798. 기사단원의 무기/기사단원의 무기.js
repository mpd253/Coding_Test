function solution(number, limit, power) {
    const attackPoint = new Array(number).fill(0);
    
    for(let i=1; i<=number; i++) {
        for(let j=1; j<=Math.sqrt(i); j++) {
            if(i % j === 0) {
                attackPoint[i-1]++;
                if(j !== i / j) {
                    attackPoint[i-1]++;
                }
            }
        }
    }
    
    for(let i=0; i<number; i++) {
        if(attackPoint[i] > limit) {
            attackPoint[i] = power;
        }
    }
    
    return attackPoint.reduce((acc, cur) => acc + cur);
}