// element can be repeated here 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];
    const count1 = {}
    const count2 = {}

    for(let ch of nums1){
        count1[ch] = (count1[ch] || 0) + 1
    }

     for(let ch of nums2){
        count2[ch] = (count2[ch] || 0) + 1
    }

    for(let ch in count1){
        if(count2[ch]){
            const count = Math.min(count1[ch], count2[ch])
            for(let i = 0 ; i<count; i++){
            result.push(Number(ch));
        }
        }

    }

    return result
};