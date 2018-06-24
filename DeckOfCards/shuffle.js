const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// ! reverse array starting at the arr.length -1
// ! since array.length is 8 we want index 0-7 so we minus 1 
// ! while i is still greater then or equal to 0 keep looping
// ! the index is lowered by -1 per loop
for ( let i = arr.length - 1; i >= 0; i-- ) {

    // ! Here the variable randomNum generates a random number between the current loop i
    // ! A +1 is needed here since Math.random() takes a value ran value between the 2 numbers
    // ! This is so the highest number of the loop is included in the random() fn
    const randomNum = Math.floor( Math.random() * (i+1) )
    console.log(Math.random);
    console.log(randomNum);

    // ! Here a new variable is set equal to whatever is in the randomly generated index position
    const selectedItem = arr[randomNum];
    console.log(selectedItem);

    // ! Here we switch the position of random index with the current index in the loop
    arr[randomNum] = arr[i];

    // ! Now that the current index of the loop is the new random index position, it is set 
    // ! equal to the that item 
    arr[i] = selectedItem;
}

console.log(arr);
