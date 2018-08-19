let sideA = parseFloat(prompt('Enter length of the one side',''));
let sideB = parseFloat(prompt('Enter length of the second side',''));
let angle = parseFloat(prompt('Enter the size of angle',''));

let maxAngle = 180;

let logInfo = (sideC, square, perimeter) => `
c length: ${+sideC.toFixed(2)}
square: ${+square.toFixed(2)}
perimeter: ${+perimeter.toFixed(2)}
`;

let output;

if (valid(sideA) && valid(sideB) && valid(angle) && angle <= maxAngle){
    let sideC = calcSideC(sideA, sideB, angle);
    let square = calcSquare(sideA, sideB, angle);
    let perimeter = sideA + sideB + sideC;
    output = logInfo(sideC, square, perimeter);
} else {
    output = 'Invalid data';
}

function valid(num) {
	return !isNaN(num) && num >= 0;
}

function calcSideC (sideA, sideB, angle) {
    let forCos = Math.PI / maxAngle;
    return Math.sqrt(sideA*sideA + sideB*sideB - 2* sideA * sideB * Math.cos(angle * forCos));
}

function calcSquare (sideA, sideB, angle){
    let forCos = Math.PI / maxAngle;
    return sideA * sideB * Math.sin(angle * forCos)/2;
}

console.log(output);
