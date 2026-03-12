//Leetcode - question- 217

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const char_count = {}

    for(let ch of nums){
        char_count[ch] = (char_count[ch] || 0) + 1
    }

    for(let ch in nums){
        if(char_count[ch] > 1){
            return true
        }
    }
    return false

};

//another approach of solving this question 

// var containsDuplicate = function(nums) {
//     const seen = new Set();
//     for(const num of nums){
//         if(seen.has(num)){
//             return true;
//         }
//         seen.add(num);
//     }
//     return false;
// };