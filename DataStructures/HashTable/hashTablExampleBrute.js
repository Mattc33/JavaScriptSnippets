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

const bruteForce = (fValue, array) => {
    let value = 0;
    for ( let i = 0; i < array.length; i++) {
        if(array[i] === fValue) {
            value = `${array[i]} in index: ${i}`
        }
    }
    return value;
}
console.time();
console.log(bruteForce('Zoe', arrayNames));
console.timeEnd();

