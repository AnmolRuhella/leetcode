//leet code question number : 557. Reverse Words in a String III

const string = "Let's take LeetCode contest"

const reverserWord = (s)=>{

    let reverse = ""
    let result = ""

    for(let i = 0;i<s.length;i++){
        if(s[i] === " "){
            result = result + reverse +  " "
            reverse = "" 

        } else{
            reverse = s[i] + reverse

        } 
    }
  result = result + reverse 
   return result
}
const result1 = reverserWord(string)

console.log(result1)