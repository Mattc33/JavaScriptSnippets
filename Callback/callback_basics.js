/*
* Callback Basics
*/

// ! example one

// ? passing fn2 into fn1 and triggering fn2 after fn1 complete some bit of code
function fn1(callback) {
    let x = 'H'
    return x + callback();
}

const fn2 = function() {
    return 'ello';
}

console.log( fn1( fn2 ) );

// ? ES6
const fn1_es6 = (callback) => {
    let x = 'H'; 
    return x + callback()
};

const fn2_es6 = () => 'ello';

console.log( fn1_es6(fn2_es6) );

// ! example two

const x = () => 'hello';
const y = (callback) => callback();

console.log(y(x));