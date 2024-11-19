function solution(name, yearning, photo) {
    const result = [];
    
    const score = name.reduce((acc, cur, idx) => {
        acc[cur] = yearning[idx];
        return acc;
    }, {});
    
    for(let i=0; i < photo.length; i++) {
        let sum = 0;
        const photoArray = photo[i];
        
        for(let j=0; j < photoArray.length; j++) {
            if(score[photoArray[j]]) {
                sum += score[photoArray[j]];
            }
        }
        result.push(sum);
    }
    return result;
}