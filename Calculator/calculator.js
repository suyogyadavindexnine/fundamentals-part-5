const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
    let sum = 0;
	arr.forEach(element => {
        sum = sum+element;
    });
    return sum;
};

const multiply = function(num1,num2) {
    return num1*num2;
};

const power = function(num1,num2) {
    return num1**num2;
};

const factorial = function(num) {
	if (num==0) {
        console.log(`The factorial of ${num} is 1.`);
    }else{
        let fact = 1;
        for (i = 1; i <= num; i++) {
            fact = fact * i;
        }
        console.log(`The factorial of ${num} is ${fact}.`);
    }
};

console.log(`add test 1 : ${add(0,0)}`);
console.log(`add test 2 : ${add(2,2)}`);
console.log(`add test 3 : ${add(2,6)}`);

console.log(`subtract test 1 : ${subtract(10,4)}`);

console.log(`sum test 1 : ${sum([])}`);
console.log(`sum test 2 : ${sum([7])}`);
console.log(`sum test 3 : ${sum([7,11])}`);
console.log(`sum test 4 : ${sum([1,3,5,7,9])}`);

console.log(`multiply test 1 : ${multiply(2,4)}`);
console.log(`multiply test 2 : ${multiply(12,8)}`);

console.log(`power test 1 : ${power(4,3)}`);

console.log(`factorial test 1 :`);
factorial(0);
console.log(`factorial test 2 :`);
factorial(1);
console.log(`factorial test 3 :`);
factorial(2);
console.log(`factorial test 4 :`);
factorial(5);
console.log(`factorial test 5 :`);
factorial(10);