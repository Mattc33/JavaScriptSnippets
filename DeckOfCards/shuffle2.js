const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


const pseudoRandomNumber = () => epoch = parseInt( Date.now().toString().slice(9)) * .0001;

// ! this is the array
const shuffle = (arr) => {
    for ( let i = arr.length - 1; i >= 0; i-- ) {
        const randomNum = Math.floor( pseudoRandomNumber() * (i+1) )
        const selectedItem = arr[randomNum];
        arr[randomNum] = arr[i];
        arr[i] = selectedItem;
    }
    return arr;
}

const result = shuffle(arr);

console.log(result);