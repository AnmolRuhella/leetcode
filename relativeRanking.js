// leetcode question no - 506 

var findRelativeRanks = function(score) {
    let n = score.length;

    let arr = score.map((val, idx) => [val, idx]);

    arr.sort((a, b) => b[0] - a[0]);

    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        let originalIndex = arr[i][1];

        if (i === 0) result[originalIndex] = "Gold Medal";
        else if (i === 1) result[originalIndex] = "Silver Medal";
        else if (i === 2) result[originalIndex] = "Bronze Medal";
        else result[originalIndex] = (i + 1).toString();
    }

    return result;
};