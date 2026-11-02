const isPrime = (num) => {

    if(num<2){
        return false;
    }

    for(let i=2;i<num;i++){
        if(num % i === 0){
            return "It's not a prime number";
        }
    }
    return "It's a prime number";
}

console.log(isPrime(7)); // Output: "It's a prime number"
console.log(isPrime(10)); // Output: "It's not a prime number"


//isPrime with another approach
const isPrimeOptimized = (num) =>{
    if(num < 2){
        return false;
    }

    for(let i = 2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return "It's not a prime number";
        }
    }
    return "It's a prime number";
}

console.log(isPrimeOptimized(7)); // Output: "It's a prime number"
console.log(isPrimeOptimized(10)); // Output: "It's not a prime number"

//this approach has a time complexity of O(sqrt(n)) which is more efficient than the previous approach with a time complexity of O(n)