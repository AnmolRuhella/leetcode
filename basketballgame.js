// Basket Ball Game 682 
var calPoints = function(operations) {

    let result = []
    let sum = 0 

    for(let i = 0; i<operations.length ;i++){

        if(operations[i] === "C"){
            result.pop()
        }
        else if (operations[i] === "D"){
           let newValue = result[result.length - 1] * 2
          result.push(newValue)
        }
        else if (operations[i] === "+"){
           let newValue = result[result.length - 1] + result[result.length - 2]
            result.push(newValue)
        }
        else{
            result.push(Number(operations[i]))
        }


    }

    for(let j = 0; j<result.length ; j++ ){
        sum = sum + result[j]
    }

    return sum ;
    
};
