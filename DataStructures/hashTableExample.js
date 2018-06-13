// ! Objective find Ada in a given Array

const arrayNames = [
    'Jan', 'Tim', 'Mia', 'Sam', 'Leo', 'Ted', 'Bea', 'Lou', 'Ada', 'Max', 'Zoe'
];

// * brute force : checking each element at a time through the entire array
// * AKA a linear search
const bruteForce = (array) => {
    let value = 0;
    for ( let i = 0; i < array.length; i++) {
        if(array[i] === 'Ada') {
            value = `${array[i]} in index: ${i}`
        }
    }
    return value;
}
console.time();
console.log(bruteForce(arrayNames));
console.timeEnd();
// * Time complexity of

// * hashtable : 
// ? lets say you knew the index position of where Ada was located you would be able to find Ada very quickly
const findAda = (array) => {
    return array[8];
}
console.time();
console.log(findAda(arrayNames));
console.timeEnd();

// ? now how do you end up assigning a index position for every value? 
// * Each index number can be calculated with the value itself 
// * This is called a Hashing Function or Hashing Algorithm

const hashTable = (array) => {
    const newArr = [];
    for( let i = 0; i < array.length; i++ ) {
        let ascii = 0;
        for( let x = 0; x < array[i].length; x++ ) {
            ascii += array[i].charCodeAt(x);
        }
        console.log(ascii);
        const getPosition = (ascii % array.length);
        console.log(getPosition);
        newArr[getPosition] = array[i];
    }
    return newArr;
}

console.time();
console.log(hashTable(arrayNames));
console.timeEnd();
// * find Ada

const findWithHash = (name, hashedArray) => {
    let ascii = 0;
    for( let i = 0; i < name.length; i++ ) {
        ascii += name.charCodeAt(i);
    }
    const getPosition = (ascii % hashedArray.length);
    return `${hashedArray[getPosition]} @ index: ${getPosition}` ;
}

console.time();
console.log(findWithHash('Leo', hashTable(arrayNames)));
console.timeEnd();
