
//leetcode questioin 345 
var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU";
    const arr = s.split(""); /// converting sting to array 

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        if (!vowels.includes(arr[left])) {
            left++;
        }
        else if (!vowels.includes(arr[right])) {
            right--;
        }
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join(""); // here back to string 
};
