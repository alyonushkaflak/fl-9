function isPrime (num) {
    for (var i = 2; i < num; i++) {
        if (num%i===0){
        return false;
        }
    }
    return true;
}

// testing
// console.log(isPrime(5));
// console.log(isPrime(6));