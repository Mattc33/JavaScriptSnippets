const arr = [2,3,1]

const bubbleSort = (array) => {
    let i, j, lim;
    lim = array.length;
    while(lim--) {
        for(i = 0, j = 1; i < lim; ++i, ++j) {
            if ( array[i] > array[j] ) {
                temp = array[i];
                console.log(temp);
                array[i] = array[j];
                console.log(array[i])
                array[j] = temp;
                console.log(array[j])
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));
