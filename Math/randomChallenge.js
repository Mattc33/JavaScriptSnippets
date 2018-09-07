const max = 10
const min = 0

const randomNumGenerator = Math.floor((Math.random() * max) + min)
const booleanOfRandom = (randomNumber) => randomNumber <= 5 ? true : false

console.log(randomNumGenerator)
console.log(booleanOfRandom(randomNumGenerator))
