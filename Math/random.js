const min = 10
const max = 20
const randomNum = Math.floor(Math.random() * (max - min)) + min
// 10 - 20
console.log(randomNum)



// ! explain why this works
// * Math.floor always rounds down
// * 

const shortenRandomNum = Math.floor((Math.random() * max) + min);
console.log(shortenRandomNum)