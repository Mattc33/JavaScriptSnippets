
const fizzbuzz = (length, check1, check2) => {
    for( let i = 1; i <= length; i++ ) {
        if ( (i % check1 === 0) && (i % check2 === 0) ) {
            console.log('fizzbuzz')
        }
        else if( i % check1 === 0 ) {
            console.log('fizz')
        }
        else if( i % check2 === 0 ) {
            console.log('buzz')
        }
        else {
            console.log(i)
        }
    }
}

fizzbuzz(20, 5, 10);