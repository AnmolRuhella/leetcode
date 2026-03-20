//leetcode question no 2785
const s = "lEetcOde"

var sortVowels = function(s) {
const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"])
const vowelList = []
for(let ch of s){
    if(vowels.has(ch)){
        vowelList.push(ch)
    }

}

vowelList.sort()

console.log(vowelList)
let result = ""
let i = 0
for(let ch of s ){
    if(vowels.has(ch)){
        result = result + vowelList[i]
        i++

    }
    else{
        result = result + ch

    }
}
return result
};

const result = sortVowels(s)
console.log(result)