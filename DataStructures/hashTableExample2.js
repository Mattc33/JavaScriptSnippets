const arrayNames = [
    {name: 'Jan', gender: 'F'}, 
    {name: 'Tim', gender: 'M'}, 
    {name: 'Mia', gender: 'F'}, 
    {name: 'Sam', gender: 'M'}, 
    {name: 'Leo', gender: 'M'}, 
    {name: 'Ted', gender: 'M'}, 
    {name: 'Bea', gender: 'F'}, 
    {name: 'Lou', gender: 'M'}, 
    {name: 'Ada', gender: 'F'}, 
    {name: 'Max', gender: 'M'}, 
    {name: 'Zoe', gender: 'F'},
];

const hashTable = (array) => {
    const newArr = [];
    for( let i = 0; i < array.length; i++ ) {
        let ascii = 0;
        for( let x = 0; x < array[i].name.length; x++ ) {
            ascii += array[i].name.charCodeAt(x);
        }
        console.log(ascii);
        const getPosition = (ascii % array.length);
        console.log(getPosition);
        newArr[getPosition] = array[i];
    }
    return newArr;
}

const newHashedArray = hashTable(arrayNames);

console.log(hashTable(arrayNames));

const findWithHash = (name, hashedArray) => {
    let ascii = 0;
    for( let i = 0; i < name.length; i++ ) {
        ascii += name.charCodeAt(i);
    }
    const getPosition = (ascii % hashedArray.length);
    return hashedArray[getPosition] ;
}

console.time();
console.log( findWithHash('Zoe', newHashedArray).gender );
console.timeEnd();