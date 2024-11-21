function solution(nums) {
    const setArr = new Set(nums);
    
    return Math.min(setArr.size, nums.length/2);
}