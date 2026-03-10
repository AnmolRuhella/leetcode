const s = "anaman"

function Pallindrome(s){
    let original_value = s
    let reverse_string = ""
    for(let i = 0 ; i<=s.length -1 ; i++){
        reverse_string = s[i] + reverse_string ;
    }
    if(reverse_string === s){
        return true;
    }
    else{
        return false;
    }
}

const result = Pallindrome(s)
console.log(result)