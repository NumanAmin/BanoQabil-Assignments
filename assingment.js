// Q no = 01
// use while loop print number 0 to 10
let i = 0;
while (i <= 10){
    console.log(i);
    i++;
}

// Q no =02
// use for loop print table
let number = 2;
for (let i = 1; i <= 10; i++){
    console.log(number + " X " + i + " = " + number * i);
}

// Q no = 03
// use function , loop and condition 
let num0 = 11;
function isPrime(num0){
    if (num0 <= 1){
        return false;
    }
    for (let i = 2; i < num0; i++){
        if (num0 % i === 0){
            return false;
        }
    }
    return true;
}
let number1 = num0;
if (isPrime(number1)){
    console.log(number1 + " a prime number ");
} else {
    console.log(number1 + " not a prime number");
}

// Q no = 04
// use arrow function squre
let num = 3;
let squre = (num) => {
    return num*num;
}
console.log("Squre " + squre(num));

// Q no = 05
// use arrow function print + , - , *
let a = 10;
let b = 5;
let calc = (a , b) => {
    let sum = a + b;
    let sub = a - b;
    let multi = a * b;

    return {
        sum: sum,
        sub: sub,
        multi: multi
    };
}
let result = calc (a , b);
console.log("sum = " , result.sum);
console.log("sub = " , result.sub);
console.log("multi = " , result.multi);

// Q no 06
// use function and loop print Average
let numbers = [ 10,20,30,40,50];
function totalAndAverage(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    let average = total / numbers.length;
    console.log("Total : ", total);
    console.log("Average : ", average);
}
console.log(totalAndAverage(numbers));

// Q no 07
// Use function and condition print Grade
let marks = 90;
let assingGrade = (marks) => {
    if (marks >= 101){
        return "in Correct Marks";
    } else if (marks >= 80 ){
        return "Grade A";
    } else if (marks >= 60){
        return "Grade B";
    } else if(marks >= 40){
        return "Grade C";
    } else {
        return "Fail";
    }
}
console.log(assingGrade (marks));