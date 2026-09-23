var checkPerfectNumber = function(nums){

    let sum = 0 
    let n =   1

    while(sum<nums){
        if(nums%n === 0 ){
            sum = sum + n 
        }
        n = n + 1
    }
    return num === sum 
}