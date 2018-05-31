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


