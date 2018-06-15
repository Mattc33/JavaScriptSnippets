const array = [
    {id: 0, numberArr: [1, 2]},
    {id: 0, numberArr: []},
    {id: 0, numberArr: [1, 2]},
    {id: 0, numberArr: [1, 2]},
    {id: 0, numberArr: []},
    {id: 0, numberArr: [1, 2]},
    {id: 0, numberArr: [1, 2]},
    {id: 0, numberArr: [1, 2]},
    {id: 0, numberArr: []},
    {id: 0, numberArr: [1, 2]},
]

// * Expected results 7 objects in resulting array

const filterOutBlankArrays = (array, innerArr) => 
    array.filter( arrItem => arrItem[innerArr].length > 0 );


console.log(filterOutBlankArrays(array, 'numberArr'));