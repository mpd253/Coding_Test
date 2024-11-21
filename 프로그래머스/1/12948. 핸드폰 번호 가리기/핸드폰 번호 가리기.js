function solution(phone_number) {
    const sliceNum = phone_number.slice(-4);
    
    return sliceNum.padStart(phone_number.length, '*');
}