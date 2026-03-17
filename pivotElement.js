//leetcode question number - 724 
var pivotIndex = function(nums) {
    let totalSum = 0;

    for (let num of nums) {
        totalSum += num;
    }

    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum = leftSum + nums[i];
    }

    return -1;
};

// prefix sum technique -
// Using Mathematical Notation:
// Let the original array be: arr[] = [a0, a1, a2, ..., an-i].
// The prefix sum array is: prefix[i] = a0 + a1 + a2 + ... + ai

// So,

// prefix[0] = arr[0]
// prefix[1] = arr[0] + arr[1]
// prefix[2] = arr[0] + arr[1] + arr[2]
// ... 
