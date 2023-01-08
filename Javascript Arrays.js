// 1.Get nth element of array
// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

function myFunction(a, n) {
    return a[n - 1];
}

// kutilmoqda
// myFunction([1,2,3,4,5],3)// Expected// 3
// myFunction([10,9,8,7,6],5)// Expected// 6

// 2.Remove first n elements of an array
// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

function myFunction(a){
    return a.slice(3);
}

// kutilmoqda
// myFunction([1,2,3,4])// Expecte// [4]
// myFunction([5,4,3,2,1,0])// Expected// [2,1,0]

// 3.Get last n elements of an array
// Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

function myFunction(a){
    return a.slice(-3);
}

// kutilmoqda
// myFunction([1,2,3,4])// Expected// [2,3,4]
// myFunction([5,4,3,2,1,0])// Expected// [2,1,0]

// 4.Get first n elements of an array
// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array

function myFunction (a){
    return a.slice(0, 3);
}
// kutilmoqda
// myFunction([1,2,3,4])// Expected// [1,2,3]
// myFunction([5,4,3,2,1,0])// Expected// [5,4,3]

// 5.Return last n array elements
// Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.

function myFunction (a){
    return a.slice(-n);
}

// kutilmoqda 
// myFunction([1, 2, 3, 4, 5], 2)// Expected// [ 4, 5 ]
// myFunction([1, 2, 3], 6)// Expected// [ 1, 2, 3 ]

// 6.Remove a specific array element
// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

function myFunction(){
    return a.filter(arrItem => arrItem !== b);
}

// kutilmoqda
// myFunction([1,2,3], 2)// Expected// [1, 3]
// myFunction([1,2,'2'], '2')// Expected// [1, 2]

// 7.Count number of elements in JavaScript array
// Write a function that takes an array (a) as argument. Return the number of elements in a.

function myFunction(a){
    return a.length;
}

// kutilmoqda
// myFunction([1,2,2,4])// Expected// 4
// myFunction([9,9,9])// Expected// 3

// 8.Count number of negative values in array
// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

function myFunction(){
    return a.filter((el) => el < 0).length;
}

// kutilmoqda
// myFunction([1,-2,2,-4])// Expected// 2
// myFunction([0,9,1])// Expected// 0

// 9.Sort an array of strings alphabetically
// Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.

function myFunction(){
    return arr.sort();
}

// kutilmoqda
// myFunction(['b', 'c', 'd', 'a'])// Expected// ['a', 'b', 'c','d']
// myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])// Expected/['a''a', 'c', 'd', 'w', 'y', 'z']

// 10.Sort an array of numbers in descending order
// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.

function myFunction(){
    return arr.sort((a, b) => b - a);
}

// kutilmoqda
// myFunction([1,3,2])// Expected// [3,2,1]
// myFunction([4,2,3,1])// Expected// [4,3,2,1]

// 11.Calculate the sum of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

function myFunction(){
    return a.reduce((acc, cur) => acc + cur, 0);
}

// kutilmoqda
// myFunction([10,100,40])// Expected// 150
// myFunction([10,100,1000,1])// Expected// 1111

// 12.Return the average of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the average of the numbers.

function myFunction(){
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

// kutilmoqda
// myFunction([10,100,40])// Expected// 50
// myFunction([10,100,1000])// Expected// 370

// 13.Return the longest string from an array of strings
// Write a function that takes an array of strings as argument. Return the longest string.

function myFunction (){
    return arr.reduce((a, b) => a.length <= b.length ? b : a)
}

// kutilmoda
// myFunction(['help', 'me'])// Expected// 'help'
// myFunction(['I', 'need', 'candy'])// Expected// 'candy'

// 14.Check if all array elements are equal
// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

function myFunction(){
    return new Set(arr).size === 1;
}

// kutilmoqda
// myFunction([true, true, true, true])// Expected// true 
// myFunction(['test', 'test', 'test'])// Expected// true 

// 15.Merge an arbitrary number of arrays
// Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.

function myFunction(){
    return arrays.flat();
}

// kutilmoqda
// myFunction([1, 2, 3], [4, 5, 6])// Expected// [1, 2, 3, 4, 5, 6]
// myFunction(['a', 'b', 'c'], [4, 5, 6])// Expected
// ['a', 'b', 'c', 4, 5, 6]

// 16.Sort array by object property
// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

function myFunction(){
    const sort = (x, y) => x.b - y.b;
    return arr.sort(sort);
}

// kutilmoqda
// myFunction([{a:1,b:2},{a:5,b:4}])// Expected// [{a:1,b:2},{a:5,b:4}]
// myFunction([{a:2,b:10},{a:5,b:4}])// Expected// [{a:5,b:4},{a:2,b:10}]

// 17.Merge two arrays with duplicate values
// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array

function myFunction (){
    return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

// kutilmoqda
// myFunction([1, 2, 3], [3, 4, 5])// Expected// [ 1, 2, 3, 4, 5 ]
// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])// Expected// [ -11, -10, 5, 22, 41,  42, 333]