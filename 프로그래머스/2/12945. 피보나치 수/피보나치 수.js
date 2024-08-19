function solution(n) {
    let fib = [0, 1];
    
    for(let i=2; i<=n; i++) {
        fib[i] = (fib[i-1] + fib[i-2]) % 1234567;
    }
    return fib[n];
}

// 런타임 오류로 인한 Dynamic Programming 필요

// function solution(n) {
//     function fib(n) {
//         if(n === 0) {
//             return 0;
//         }
    
//         if(n === 1) {
//             return 1;
//         }
    
//         if(n >= 2) {
//             return (fib(n-1) + fib(n-2) % 1234567);
//         }   
//     }
//     return fib(n);
// }
// console.log(solution(5));