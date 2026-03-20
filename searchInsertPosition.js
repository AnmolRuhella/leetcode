//leetcode question number - 35
var searchInsert = function(nums, target) {
    const n = nums.length 

    for(let i= 0 ;i<n ; i++){
        if(nums[i] === target ){
            return i
        }
        else if (nums[i] > target) {
            return i;
        }
       
    }
     return n
    
};