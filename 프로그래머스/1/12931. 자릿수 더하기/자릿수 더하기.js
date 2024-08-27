function solution(n)
{
    var answer = 0;
    const array = n.toString()
    
    for(let i=0; i<array.length; i++) {
        answer += parseInt(array[i]);
    }

    return answer;
}

console.log(solution(123));