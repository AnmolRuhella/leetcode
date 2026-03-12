//leetcode question no - 228
var summaryRanges = function(nums) {
    const result = []
    if(nums.length === 0 ){
        return result
    }
    
    let start = nums[0]
    for(let i = 0 ;i<nums.length ; i++){
        if(i === nums.length -1 || nums[i]+ 1 !== nums[i+1]){
            if(start === nums[i]){
                result.push(`${start}`)
            }
            else{
                result.push(`${start}->${nums[i]}`)
            }

            start = nums[i+1]
        }
    }
    return result
    
};