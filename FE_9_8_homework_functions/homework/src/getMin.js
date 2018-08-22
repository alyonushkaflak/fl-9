function getMin() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < arguments[0]) {
            arguments[0] = arguments[i];
        }

    }
    return arguments[0];
}

// testing
// console.log(getMin(3, 0, -3));

// I've done this at first:
// function getMin(a,b,c){
//     return Math.min(a,b,c);
// }
// testing
// console.log (getMin (3,6,2))