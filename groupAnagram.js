// leetcode question number - 49
var groupAnagrams = function(strs) {
    
const count = {}
for(const word of strs){
    const sort = word.split("").sort().join("")

    if(!count[sort]){
        count[sort] = []
    }
    count[sort].push(word)

}
return Object.values(count)
};