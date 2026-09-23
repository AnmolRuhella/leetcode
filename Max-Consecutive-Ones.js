
var findMaxConsecutiveOnes = function(nums) {

    var counter_array = [];
    var counter = 0;
    var max = -Infinity;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {
            counter = counter + 1;
        } else {
            counter_array.push(counter);
            counter = 0;
        }
    }

    counter_array.push(counter);

    for (let i = 0; i < counter_array.length; i++) {
        if (counter_array[i] > max) {
            max = counter_array[i];
        }
    }

    return max;
};
//catch part is here is that ki last index pe 1 ha toh push counter ke ander push nhi kr paare the isliye hume if ke bhaar counter_array push 