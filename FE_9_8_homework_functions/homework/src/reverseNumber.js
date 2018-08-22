function reverseNumber(a){
    return Math.sign(a)*parseInt(a.toString().split('').reverse().join(''));
}

// testing
// console.log(reverseNumber(1000));