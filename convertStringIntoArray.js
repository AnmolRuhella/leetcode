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

//array.split(separator) and let arr = Array.from(str) and let arr = [...str];
//these are the inbuilt function to convert string into an  array 
