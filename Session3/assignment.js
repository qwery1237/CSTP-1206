'use strict';

// Q1
const sum = (arr) => {    
    const sum = arr.reduce(((currentVal,nextVal) => currentVal + nextVal),0);
    console.log(`Sum of the elements in the array is ${sum}`);
}

console.log("Q1.");
sum([1,2,3,4,5,6]);

// Q2
const printEvens = (num) => {
    for (let i = 0; i <= num; i++){
        !(i%2) ? console.log(i) : null;
    }
}

console.log("\nQ2.");
printEvens(10);

// Q3
const checkLetter = (string,letter) => 
    (string.toLowerCase().includes(letter)) ? console.log("Yes") : console.log("No");

console.log("\nQ3.");
checkLetter("efYji","y");

// Q4
const factorial = (num) => (num) ? num*factorial(num-1) : 1;

console.log("\nQ4.");
console.log(factorial(4));

// Q5
const grade = (s1,s2,s3,s4) => {
    const avg = (s1+s2+s3+s4)/ 4;
    if (avg > 90) {
        console.log("Your grade is A");
    }
    else if (70 < avg) {
        console.log("Your grade is B");
    }
    else if (50 < avg) {
        console.log("Your grade is C");
    }
    else {
        console.log("Your grade is F");
    }
}

console.log("\nQ5.");
grade(90,90,90,90);

// Q6
const stars =  (num) => {
    for(let i = 1; i <= num; i++){
        console.log("*".repeat(i));
    }
}

console.log("\nQ6.");
stars(5);

// Q7
const stars2 =  (num) => {
    for(let i = 1; i <= num; i++){
        console.log("*".repeat(i));
    }
    for(let i = num-1; i >= 1; i--){
        console.log("*".repeat(i));
    }
}

console.log("\nQ7.");
stars2(5);

const reverse = (str) => console.log(str
    .split("").reverse().join(""));

console.log("\nQ8.");
reverse("abc");