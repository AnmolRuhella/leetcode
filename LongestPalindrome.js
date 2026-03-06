// Leetcode questoin no - 409
//s = "abccccdd"
var longestPalindrome = function(s) {
    const set = new Set();
    let length = 0;

    for (let char of s) {
        if (set.has(char)) {
            set.delete(char);
            length += 2;
        } else {
            set.add(char);
        }
    }

    if (set.size > 0) length += 1;

    return length;
    
};

// Here we are using the set first initialising set 
// then applying loop on set 
// checking that in a set there is a char 
//if yes then delete char and increase the pallindrome length by 2 becuase here we are removing the existing element .
//if no then simply add the char in set 
// after loop is finish then increase the pallindrome length by 1 beacuse of unique element in the set .