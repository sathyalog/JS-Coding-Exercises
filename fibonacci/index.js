//recursive calling
function fibonacci(n) {
    if (n<= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
 }
 
 console.log(fibonacci(14)); //377
 console.log(fibonacci(15)); //610
 console.log(fibonacci(8)); //21
 console.log(fibonacci(9)); //34
 console.log(fibonacci(4)); //3