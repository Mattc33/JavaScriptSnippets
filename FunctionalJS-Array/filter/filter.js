/*
* What is Filter: Array.prototype.filter()
* Filter takes an array and creates a new array that passes the condition
*/
const words = [ 'pizza', 'burger', 'donut', 'pie' ];

/*
? Pre-es6
*/
const result = words.filter( 
     function(word) {
        return word.length > 3;
    } 
);
console.log(result);

/*
? es6+
*/
const result_ArrowFunction = words.filter( word => word.length > 3 );
console.log(result_ArrowFunction);


