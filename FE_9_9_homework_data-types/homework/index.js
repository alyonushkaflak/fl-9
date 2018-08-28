//task#1

//let argument = 4;
function findType(argument) {
    return typeof argument;
}
//testing
//console.log (findType (argument));

//task#2

function forEach(arr, log) {
    for (let i = 0; i < arr.length; i++) {
        log(arr[i]);
    }

}

//task#3

function map(arr, value) {
    let newArray = [];
    forEach(arr, log => {
        newArray.push(log(value));
    });
    // for (let i = 0; i < arr.length; i++){
    //     newArray[i] = arr [i] + value;
    // }
    return newArray;
}

//task#4

function filter(arr, value) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

// task#6

function keys(obj) {
    let vals = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            vals.push(obj[key]);
        }
    }
    return vals;
}

//task #7

// objArray = [{ key: 1}, { key: 3}, { key: 5}];

function values(arr, value) {
    let output = [];
    for (let i = 0; i < arr.length; ++i) {
        output.push(arr[i][value]);
    }
    return output;
}

// let result = values(objArray, "key"); 
// console.log (result);

//task#8

function showFormattedDate(date) {
    let monthNames = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return `It is ${day} of ${monthNames[monthIndex]}, ${year}`;
}

console.log(showFormattedDate(new Date()));