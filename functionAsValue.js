// In this example passing functions as a value

/* In JS you can assign a variable to an anyonomous function(method w/o a name) 
and use it much like a regular paramater you can then assign it to a var or 
pass it into another method as an arg */

var plusOne = function( number ) {
    return number + 1;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

var waffle = plusOne;
console.log( waffle(2) );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function plusTwo( number ) {
    return number + 2;
}
console.log( plusTwo(waffle(1)) );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

/* whats happening here is the var plusOne is being assigned to the anoynomous function that returns the input
+ 1. the var waffle is being assigned the properties of the plusOne method and finally at the end we pass in 
the waffle method as a value as an argument of the method plusTwo
*/

