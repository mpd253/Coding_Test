function solution(my_string, queries) {
    let arr = my_string.split("");
    
    for(let i=0; i<queries.length; i++) {
        let s = queries[i][0];
        let e = queries[i][1];
        
        let reversedArr = arr.slice(s, e+1).reverse();
        arr.splice(s, e - s + 1, ...reversedArr);
       
    }
    console.log(arr);
    return arr.join("");
}