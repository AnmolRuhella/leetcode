/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {

        if (set.has(nums[i])) {
            return true;
        }

        set.add(nums[i]);

        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }

    return false;
};


//the main catch in this jaise ki set ki value > k 
//tbhi hume uske sbse purane elemnt ko kr dete ha set se 