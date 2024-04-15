function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
         if (arguments[i] !== undefined) {
            sum += arguments[i];
        }
    }
    return sum;
}
function subtract(a=0, b = 0) {
    return a - b;
}

function multiply(...num) {
    let result = 1;
    for (let i = 0; i < num.length; i++) {
        result *= num[i];
    }
    return result;
}

function divide() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] !== 0) {
            result /= arguments[i];
        } else {
            console.log("Error: Division by zero");
            return;
        }
    }
    return result;
}

console.log(add(2, 3, undefined, 5)); 
console.log(subtract(10,21)); 
console.log(multiply(2, 3, 4)); 
console.log(divide(20, 2, 9)); 