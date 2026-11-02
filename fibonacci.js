const fibonacci = (n) => {
    if(n <  0){
        return 'Input should be a non-negative integer and greater than zero';
    }

    const fib  = [0, 1];

    for(let i = 2 ; i < n; i++){
        fib [i] = fib[i-1] + fib[i-2];
    }

    return fib;
};

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]