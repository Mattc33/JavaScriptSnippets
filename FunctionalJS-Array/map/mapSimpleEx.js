// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// ? The map() method creates a new array with the results of calling 
// ? a provided function on every element in the calling array.

// ? take an array and turn it into an array of the same length but with modified values

const animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Harold',     species: 'fish' },
    { name: 'Ursula',     species: 'cat' },
    { name: 'Jimmy',      species: 'fish' }
];

// We want to get an array of all of the names of all the animals
// Solve with a for loop first
returnArrOfAnimalNames = function(arr) {
    const animalNameArr = [];
    for ( let i = 0; i<arr.length; i++ ) {
        animalNameArr.push(arr[i].name);
    }
    return animalNameArr;
};

console.log(returnArrOfAnimalNames(animals));

/*                                          
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
// solve with map
const names = animals.map(function(animal) {
    return animal.name;
});

console.log(names);

// Map allows you to easily create arrays with modifications

const namesModified = animals.map(animal => animal.name + ' is a ' + animal.species);

console.log(namesModified);

// Map Multiply Each array item by 2
const numArr = [1, 4, 9, 16];
const multiplyItemsByTwo = (arr) => arr.map( (item) => item * 2); 
console.log(multiplyItemsByTwo(numArr));




