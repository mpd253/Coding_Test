function solution(A,B) {
    let answer = 0;
    
    const array1 = A.sort((a, b) => a - b);
    const array2 = B.sort((a, b) => b - a);
    
    for (let i=0; i<A.length; i++) {
        answer += A[i] * B[i];
    }
    
    return answer;
}