//leetcode question number - 205 
var isIsomorphic = function(s, t) {

    if(s.length!== t.length) return false

    const mapped_ST = new Map();
    const mapped_TS = new Map();

    for(let i =0;i<s.length;i++){
        if(mapped_ST.has(s[i]) && mapped_ST.get(s[i])!== t[i]) return false;

        if(mapped_TS.has(t[i]) && mapped_TS.get(t[i])!== s[i]) return false;

        mapped_ST.set(s[i],t[i])
        mapped_TS.set(t[i],s[i])
    }
    return true;
 

    
};