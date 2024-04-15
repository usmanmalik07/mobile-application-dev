const fullName = ((name,last)=> name + " " + last);
console.log(fullName("Rana","Sami"));

const number = ((num)=>num*45);
console.log(number(5));

const Even = (myarray) => {
    let num= [];
    for (let j of myarray) {
        if (j% 2 === 0) {
            num.push(j);
        }
    }
    return num;
}S

console.log(Even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));