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

//another approach binary search

const nums = [1,3,5,6]
const target =  2

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
            console.log("coming her ")
        }
    }

    // position where target should be inserted
    return left;
};

//2nd approach binary search 

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    // position where target should be inserted
    return left;
};



