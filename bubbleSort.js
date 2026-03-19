const arr =[11,34,-5,0,22,10]

function bubbleSort(arr){
    let swapped
    let temp
    
    for(let i =0 ; i<arr.length-1;i++){
         swapped = false
        for(let j=0 ;j<arr.length-i-1; j++){
           
            if(arr[j]> arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true 
            }
        }
            if(!swapped){
                break
            }
       
    }
    return arr
}

const result= bubbleSort(arr)
 console.log(result)