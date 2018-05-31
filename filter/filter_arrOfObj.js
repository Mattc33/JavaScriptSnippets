const pets = [ 
	{name: 'harold', species: 'rabbit'},
	{name: 'peaches', species: 'parrot'},
	{name: 'steve', species: 'fish'},
	{name: 'waffles', species: 'doggo'}
];

// using a for loop to filter out pets that are dogs into another array

const filteredArr = [];
for( let i = 0; i<pets.length; i++ ) {
    if ( pets[i].species === 'doggo' ) {
        filteredArr.push(
            { name: pets[i].name, type: pets[i].species}
        );
    }
}

console.log(filteredArr);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// using .filter();

const doggos = pets.filter( pet => pet.species === 'doggo' );

console.log(doggos);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// Lets seperate the callback into a seperate variable
// As you can see here a method to check whether or not species is a doggo is decoupled from the actual filter. 
// isDoggo can be used seperately somewhere else without being bound to the filter

const isDoggo = function(pet) {
    return pet.species === 'doggo';
};

const dog = pets.filter(isDoggo);

console.log(dog);

// Using the decouple isDoggo fn again

console.log( isDoggo( {name: 'bob', species: 'doggo'}) ); //true

console.log( isDoggo( {name: 'bob', species: 'cat'}) ); //false

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// using filter you have broken the problem into 2 distinct pieces
// 1. checking whether or not something is a dog
// 2. creating an array and stuffing objects into it