function solution(n, arr1, arr2) {
    const answer = [];
    const A = arr1.map((num) => num.toString(2).padStart(n, 0));
    const B = arr2.map((num) => num.toString(2).padStart(n, 0));
    
    const combineArrays = (A, B) => {
        return A.map((row, i) => {
            return row.split('').map((char, j) => {
                const sum = parseInt(char) + parseInt(B[i][j]);
                return sum > 0 ? '#' : ' ';
            }).join('');
        });
    }
    
    answer.push(...combineArrays(A, B));
    
    return answer;
}