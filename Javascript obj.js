// 1.Accessing object properties one
// Write a function that takes an object with two properties as argument. It should return the value of the property with key country.

function myFunction(obj){
    return obj.country;
}

// kutilmoqda
// myFunction({ continent: 'Asia', country: 'Japan' })// Expected// 'Japan'
// myFunction({ country: 'Sweden', continent: 'Europe' })// Expected// 'Sweden'

// 2.Accessing object properties two
// Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Tipp: you might want to use the square brackets property accessor

function myFunction(obj){
    return obj['prop-2']
}
// kutilmoqda
// myFunction({  one: 1,  'prop-2': 2})// Expected// 2
// myFunction({  'prop-2': 'two',  prop: 'test'})// Expected// 'two'


// 3.Accessing object properties three
// Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string

function myFunction(obj){
    return obj[key];
}

// kutilmoqda
// myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')// Expected// 'Asia'
// myFunction({  country: 'Sweden',  continent: 'Europe'},'country')// Expected// 'Sweden'

// 4.Check if property exists in object
// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

function myFunction(a, b){
    return b in a ;
}
// kutilmoqda
// myFunction({a:1,b:2,c:3},'b')// Expected// true
// myFunction({x:'a',y:'b',z:'c'},'a')// Expected// false

// 5.Check if property exists in object and is truthy
// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.

function myFunction(){
    return a[b] ? true : false;
}

// kutilmoqda
// myFunction({a:1,b:2,c:3},'b')
// Expected
// true
// myFunction({x:'a',y:null,z:'c'},'y')
// Expected
// false

// 6.Creating Javascript objects one
// Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. Return the object.

function myFunction(){
    return { key: a };
}

// kutilmoqda
// myFunction('a')// Expected// {key:'a'}
// myFunction('z')// Expected// {key:'z'}

// 7.Creating Javascript objects two
// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.

function myFunction(){
    return { [a]: b }
}

// kutilmoqda
// myFunction('a','b')// Expected// {a:'b'}
// myFunction('z','x')// Expected// {z:'x'}