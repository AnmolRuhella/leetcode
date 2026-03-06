// balance string = sum of odd index == sum of even index is called balance string .

// console.log(s[0]);       // "1" (string)
// console.log(s[0] - '0'); // 1 (number)

// this is the catch here to convert the number into string 

var isBalanced = function(num) {
    let even_sum = 0 
    let odd_sum = 0 
    for(let i = 0; i<num.length;i++){
        const digit = num[i] - "0" //converting string into number 
        if (i % 2 === 0 ){
            even_sum = even_sum + digit ;
        }
        else{
            odd_sum = odd_sum + digit;
        }
    }

    return even_sum === odd_sum ;

};