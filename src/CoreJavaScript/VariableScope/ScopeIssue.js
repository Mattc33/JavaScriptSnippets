let varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
}

console.log(varTwo);

// ! this will result in an error, varTwo is scoped to the if block, it can only be accessed at that level

// ? Scoping rules
// * Lexical Scoping aka Static Scoping
// * The concept is that a variable defined in one part of your program may not be accessible in other 
// * parts of the program

// ? two types of scopes
// * Global scope, scoped to the whole program, you can access these properties from anywhere
// * defined outside code block

// * local scope, scoped to a certain block of code like in a function or a if statement
// * defined inside code block

