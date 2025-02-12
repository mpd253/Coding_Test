function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    let target = (sum1 + sum2) / 2;

    let newQueue = [...queue1, ...queue2];
    
    let left = 0;
    let right = queue1.length;
    let count = 0;
    
    while (left < newQueue.length && right < newQueue.length) {
        if (sum1 === target) return count;

        if (sum1 > target) {
            sum1 -= newQueue[left];
            left++;
        } else {
            sum1 += newQueue[right];
            right++;
        }
        count++;
    }
    return -1;
}
