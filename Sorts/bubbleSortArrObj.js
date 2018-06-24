const arr = [
    {id: 2, name: 'matt'},
    {id: 3, name: 'sarah'},
    {id: 1, name: 'mike'}
]

const bubbleSort = (array) => {
    let i, j, lim;
    lim = array.length;
    while(lim--) {
        for(i = 0, j = 1; i < lim; ++i, ++j) {
            if ( array[i].id > array[j].id ) {
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
