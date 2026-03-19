// leet code question no -2724

var sortBy = function(arr, fn) {
return arr.sort((a,b)=> fn(a)-fn(b))
};