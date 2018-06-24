const sortByKey = (array, key) => {
    return array.sort( (a, b) => {
        console.log(a);
        console.log(b);

        const x = a[key]; // ! the key value which is id in this case
        console.log(x);
        const y = b[key]; // ! the key value which is id in this case
        console.log(y);

        if( x < y ) {
            return -1
        }
        if (x > y) {
            return 1
        } else {
            return 0
        }
        // * short hand
        // * return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        // *
    });
}

const result = sortByKey( [{id: 2, name: 'matt'}, {id: 3, name: 'sally'}, {id: 1, name: 'paul'}], 'id' );

console.log(result);