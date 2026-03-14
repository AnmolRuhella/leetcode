//leetcode question number - 414

var thirdMax = function(nums) {
    nums.sort((a,b) => b - a);

    const unique = [...new Set(nums)];
    if(unique.length >= 3){
        return unique[2]
    }
    return unique[0];
};