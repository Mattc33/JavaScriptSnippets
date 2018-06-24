class manipulateDeck {

    shuffle = (arr) => {
        for ( let i = arr.length - 1; i >= 0; i-- ) {
            const randomNum = Math.floor( Math.random() * (i+1) )
            const selectedItem = arr[randomNum];
            arr[randomNum] = arr[i];
            arr[i] = selectedItem;
        }
        return arr;
    }

}

export default manipulateDeck;