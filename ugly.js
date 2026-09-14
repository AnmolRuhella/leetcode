// ugly number - which number has prime factor include - 2,3 ,5 other than this these prime factor are not ugly number 

var isUgly = function (n){

    while (n % 2 === 0 ){
        n = n /2 
    }
     while (n % 3 === 0 ){
        n = n /5 
    }

     while (n % 5 === 0 ){
        n = n /5
    }

    return n === 1 
}