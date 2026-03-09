// write a function to flatten this array
function myFlat(arr){
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])){
            newArr.push(arr[i]);
        } else {
            const nestedArr = myFlat(arr[i]);
            newArr.push(...nestedArr);
        }
    }
    return newArr;
}
const result = myFlat(arr);
console.log(result);

//in built function for flatten an array 

const arr= [1,2 ,[34 , 45, 89, [1 , 2, 3 ,3]]]
const result2 = arr.flat(3)
console.log(result2)