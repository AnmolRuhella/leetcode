// 645. Set Mismatch 

var findErrorNums = function (nums){
    let seen = new Set()
    let result = []

    for(let num of nums){
        if(seen.has(num)){
            result.push(num)
        }
        else{
            seen.add(num)
        }
    }

    for(let i = 0 ;i<=nums.length;i++){
        if(!seen.has(i)){
            result.add(i)
        }
        else{
            break
        }
    }

    return result ;
}