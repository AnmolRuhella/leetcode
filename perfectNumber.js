var checkPerfectNumber = function(nums){

    let sum = 0 
    let n =   1

    while(n<nums){
        if(nums%n === 0 ){
            sum = sum + n 
        }
        n = n + 1
    }
    return num === sum 
}

//phele hum ky krre the ki hum check krre thi ki agr sum less than rahegi num se toh sum mei add krte raho 
//iska catch yehh ha ki n se compare krenege ki jb tk voh nums se km rahega tb tk hum check krte rahnege 