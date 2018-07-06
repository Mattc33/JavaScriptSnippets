// ! the spread Operators ...
// ! used to split up array elements OR object properties

const oldArray = [1,2,3];
const newArray = [...oldArray, 4, 5];

console.log(newArray);

const oldObject = {firstProp: 'prop one', secondProp: 'prop two'};
const newObject = {...oldObject, thirdProp: 'prop three'};

console.log(newObject);
