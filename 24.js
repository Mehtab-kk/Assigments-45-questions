"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let strings1 = 'Mehtab';
let string2 = 'Ali';
// • Tests for equality and inequality with strings
console.log("is string1 equal to 'hello'? i predict true");
console.log(strings1 === 'Mehtab');
console.log("is string1 not equal to string2 ? i predict true");
console.log(strings1 !== string2);
// • Tests using the lower case function
console.log('is strings1 is equal to mehtab after converting to tolowercase ? i predict true ');
console.log(`${strings1}`.toLowerCase() === 'mehtab');
console.log('is strings1 is not equal to mehtab after converting to tolowercase ? i predict false ');
console.log(`${strings1}`.toLowerCase() !== 'mehtab');
// • Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 20;
console.log('is num1 equal to 10');
console.log(num1 === 10);
console.log('is num1 is equal to num2');
console.log(num1 === num2);
console.log('is num1 is greater than num2');
console.log(num1 > num2);
console.log('is num1 is less than num2 ');
console.log(num1 < num2);
console.log('is num1 greater or equal to num2');
console.log(num1 >= num2);
console.log('is num1 less or equal to num2');
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
let val1 = true;
let val2 = false;
console.log('is val1 true and val2 false?');
console.log(val1 && val2);
console.log('is val1 true or val2 false?');
console.log(val1 || val2);
// • Test whether an item is in a array
let myarray = [1, 2, 3, 4, 5];
console.log('is 4 available in array');
console.log(myarray.includes(4));
// • Test whether an item is not in a array
console.log('is 6 available in myarray');
console.log(myarray.includes(6));
