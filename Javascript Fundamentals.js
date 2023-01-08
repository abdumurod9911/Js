// Javascript Fundamentals


// 1.Sum two numbers
// Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result

// function myFunction(a, b) {
//     return a + b;
// }

// kutilmoqda myFunction(1,2)  // Expected// 3
// myFunction(1,10)           // Expected// 11
// myFunction(99,1)          // Expected// 100


// 2.Comparison operators, strict equality
// Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type

// function myFunction(a, b){
//     return a === b;
// }

// kutilmoqda 
// myFunction(2, 3)Expectedfalse 
// myFunction(3, 3)// Expected// true 
// myFunction(1, '1')// Expected// false 
// myFunction('10', '10')// Expected// true


// 3.Get type of value
// Write a function that takes a value as argument. Return the type of the value.

// function myFunction(a) {
//     return typeof a;
// }

// kutilmoqda
// myFunction(1)// Expected// 'number'
// myFunction(false)// Expected// 'boolean'

// 4.Get nth character of string
// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

// function myFunction(a, n){
//     return a[n-1];
// }

// myFunction('abcd',1)// Expected// 'a'
// myFunction('zyxbwpl',5)// Expected// 'w'

// 5.Remove first n characters of string
// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

// function myFunction (a){
// return a.slice(3);
// }

// kutilmoqda
// myFunction('abcdefg')// Expected// 'defg'
// myFunction('1234')// Expected// '4'

// 6.Get last n characters of string
// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

// function myFunction(str){
//     return str(-3);
// }

// kutilmoqda
// myFunction('abcdefg')// Expected// 'efg'
// myFunction('1234')// Expected// '234'

// 7.Get first n characters of string
// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

// function myFunction (a){
// return a.slice(0, 3);
// }

//kutilmoqda
// myFunction('abcdefg')// Expected// 'abc'
// myFunction('1234')// Expected// '123' 

// 8.Find the position of one string in another
// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.

// function myFunction(a){
// return a.indexOf('is');
// }

// kutilmoqda
// myFunction("praise")// Expected// 3
// myFunction("risky")// Expected// 1

// 9.Extract first half of string
// Write a function that takes a string (a) as argument. Extract the first half a. Return the result

// function myFunction(a){
// return a.slice(0, a.legth / 2);
// }

// kutilmoqda 
// myFunction('abcdefgh')// 'abcd'
// myFunction('1234')// Kutilgan// '12'


// 10.Remove last n characters of string
// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

// function myFunction(a){
//     return a.slice(0, -3);
// }

// kutilmoqda
// myFunction('abcdefg')// Kutilgan// 'abcd'
// myFunction('1234')// Kutilgan// '1'


// 11.Return the percentage of a number
// Write a function that takes two numbers (a and b) as argument. Return b percent of a

// function myFunction(a, b){
//     return b / 100 * a;
// } 

// kutilmoqda
// myFunction(100,50)// Kutilgan// 50
// myFunction(10,1)// Kutilgan// 0.1

// 12.Basic JavaScript math operators
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.

// function myFunction(a, b, c, d, e, f){
//     return (((a + b - c ) * d) / e) **f;
// }

// kutilmoqda 
// myFunction(6,5,4,3,2,1)// Expected// 10.5
// myFunction(6,2,1,4,2,3)// Expecte// 2744

// 13.Check whether a string contains another string and concatenate
// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

// function myFunction(){
//     return a.indexOf(b) === -1 ? a + b : b + a;
// }

// kutilmoqda 
// myFunction('cheese', 'cake')// Expected// 'cheesecake'
// myFunction('lips', 's')// Expected// 'slips'

// 14.Check if a number is even
// Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false

// function myFunction(a){
//     return a % 2 === 0;
// }

// kutilmoqda
// myFunction(10)// Kutilgan// true
// myFunction(-4)// Kutilgan// true

// 15.How many times does a character occur?
// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

// function myFunction (a){
//     return a.split(a).legth - 1;
// }

// kutilmoqda
// myFunction('m', 'how many times does the character occur in this sentence?')// Expected// 2
// myFunction('h', 'how many times does the character occur in this sentence?')// Expected// 4

// 16.Check if a number is a whole number
// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

// function myFunction(a){
//     return a - Math.floor(a) === 0;
// }

// kutilmoqda
// myFunction(4)// Expected// true 
// myFunction(1.123)// Expected// false 

// 17.Multiplication, division, and comparison operators
// Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value

// function myFunction(a, b){
//     return a < b ? a / b : a * b;
// }

// kutilmoqda
// myFunction(10, 100)// Expected// 0.1
// myFunction(90, 45)// Expected// 4050

// 18.Round a number to 2 decimal places
// Write a function that takes a number (a) as argument. Round a to the 2nd digit after the comma. Return the rounded number

// function myFunction (a){
//     return Number(a.toFixed(2));
// }

// kutilmoqda
// myFunction(2.12397)// Expected// 2.12
// myFunction(3.136)// Expected// 3.14


// 19.Split a number into its digits
// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting

// function myFunction(){
//     const string = a + '';
//     const strings = string.split('');
//     return strings.map(digit => Number(digit))
// }

// kutilmoqda
// myFunction(10)// Expected// [1,0]
// myFunction(931)// Expected// [9,3,1]