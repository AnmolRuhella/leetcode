//leetcode question number - 268

var missingNumber = function(nums) {
    const n = nums.length
    let computed_sum = 0 
    
    const n_sum = (n * (n+1))/2
    for(let i= 0 ; i< n ; i++){
        computed_sum = computed_sum + nums[i]
    } 
    return n_sum - computed_sum

    
};