/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
const unique = new Set(candyType).size
const max_candy = candyType.length/2

return Math.min(unique,max_candy)
   
};

