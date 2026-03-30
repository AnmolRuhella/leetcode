// leetcode question number : 1002

var commonChars = function(words) {
    let count = {};

    for (let ch of words[0]) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (let i = 1; i < words.length; i++) {
        let temp = {};

        for (let ch of words[i]) {
            temp[ch] = (temp[ch] || 0) + 1;
        }

        for (let key in count) {
            count[key] = Math.min(count[key], temp[key] || 0);
        }
    }

    let result = [];

    for (let key in count) {
        while (count[key] > 0) {
            result.push(key);
            count[key]--;
        }
    }

    return result;
};