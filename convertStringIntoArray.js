const input ="anmol"

function convertToArray(input){
  const arr = [];
 for(let i = 0; i<= input.length - 1;i++){
     arr.push(input[i]);
 }
 return arr;
}
const result = convertToArray(input)
console.log(result)