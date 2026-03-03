const s = "anagram"
const t = "nagaram"

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    const char_count1 = {}
    const char_count2 = {}

    for(let ch of s ){
        char_count1[ch] = (char_count1[ch] || 0) + 1

    }
    for(let ch of t ){
        char_count2[ch] = (char_count2[ch] || 0) + 1

    }
    console.log(char_count1)

    for(const ch in char_count1 ){
        console.log(char_count1[ch] , char_count2[ch])
        if(char_count1[ch] !== char_count2[ch]){
             return false
        } 
    }
    return true

};
const result = isAnagram(s, t )


 /** here we are using for of loops which is used to generate objects from strings 
  * for of loops output - { a: 3, n: 1, g: 1, r: 1, m: 1 }
  * here we are using for in loops which is used to compare two objects 
 */