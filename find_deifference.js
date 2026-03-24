//Leetcode question number - 389
var findTheDifference = function(s, t) {

    const count_1 = {}
    const count_2 = {}

    for(let ch of s){
        count_1[ch] = (count_1[ch]|| 0) + 1
        
    }
    for(let ch of t){
        count_2[ch] = (count_2[ch]|| 0) + 1
        
    }

     for(const ch in count_2 ){
        if(count_1[ch] !== count_2[ch]){
             return ch
        } 
    }

};


//2nd approach of solving this question 


var findTheDifference = function(s, t) {
    const sortOne = s.split("").sort();
    const sortTwo = t.split("").sort();

    for(let i = 0; i < sortTwo.length; i++){
        if(sortTwo[i] !== sortOne[i]){
            return sortTwo[i];
        }
    }
};