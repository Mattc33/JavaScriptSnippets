// const randomNumber = Math.random();
// console.log(randomNumber);

// const wholeNumber = Math.floor(Math.random() * (8 + 1));
// console.log(wholeNumber);

// const unixTime = Date.now();
// console.log(unixTime);

// const newNumber = unixTime;
// console.log(unixTime);

// console.log( parseInt(newNumber.toString().slice(9)) * .0001 );

const pseudoRandomNumber = () => {
    const epoch = parseInt( Date.now().toString().slice(9)) * .0001;
    return wholeNumber = Math.floor(epoch * (8 + 1));
}

console.log(pseudoRandomNumber());




