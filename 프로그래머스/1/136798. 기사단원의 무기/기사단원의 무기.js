function solution(number, limit, power) {
    const attackPoint = new Array(number).fill(0);
    // 33점, 37점
    // const attackPoint = [];
    
    for(let i=1; i<=number; i++) {
        for(let j=i; j<=number; j+=i) {
            attackPoint[j - 1]++;
        }
        // let count = 0;
        
        // 33점
        // for(let j=1; j<=i; j++) {
        //     if(i % j === 0) {
        //         count++;
        //     }
        // }
        
        // 37점
        // for(let j=1; j<=Math.sqrt(i); j++) {
        //     if(i % j === 0) {
        //         count++;
        //         if(j !== i / j) {
        //             count++;
        //         }
        //     }
        // }
        
        // if(count > limit) {
        //     attackPoint.push(2);
        // } else {
        //     attackPoint.push(count);        
        // }
    }
    
    for(let i=0; i<number; i++) {
        if(attackPoint[i] > limit) {
            attackPoint[i] = power;
        }
    }
    
    return attackPoint.reduce((acc, cur) => acc + cur);
}