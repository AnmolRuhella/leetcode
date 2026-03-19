/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

function sortPeople(names, heights) {
    let n = names.length;
    let arr = names.map((name, i) => [name, heights[i]]);
    arr.sort((a, b) => b[1] - a[1]);
    let result = arr.map(item => item[0]);

    return result;
}
