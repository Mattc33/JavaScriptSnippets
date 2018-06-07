/*
* What is Includes: String.prototype.includes()
* Includes takes a string and returns true or false if the string is found within 
* another string
*/

// ? Example with just .includes()
function includesFn(containerString, lookupString) {
    return containerString.includes(lookupString)
}
console.log(includesFn('HelloWorld', 'Hello'));

// ? ES6
let includesFnEs6 = (containerString, lookupString) => containerString.includes(lookupString);
console.log(includesFnEs6('HelloWorld', 'hello'))

// ! array filter + includes

// ? pre-es6
const exampleStringArray = ['tiger', 'monkey', 'snake', 'bunny', 'cow', 'tiger'];
function filterIncludesFn(array, filter) {
    return array.filter( function(item) {
        return item.includes(filter);
    });
}

console.log(filterIncludesFn(exampleStringArray, 'tiger'));

// ? ES6
const filterIncludesFnEs6 = (array, filter) => exampleStringArray.filter( (item) => item.includes(filter) );

console.log(filterIncludesFnEs6(exampleStringArray, 'tiger'))
