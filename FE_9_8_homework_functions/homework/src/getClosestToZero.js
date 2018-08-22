function getClosestToZero(number, array) {
    let curr = array[0];
    let diff = Math.abs(number - curr);
    for (let val = 0; val < array.length; val++) {
        let newdiff = Math.abs(number - array[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = array[val];
        }
    }
    return curr;
}

// testing
// array = [9, 5, -4, -9];
// number = 0;
// console.log (getClosestToZero (number, array));