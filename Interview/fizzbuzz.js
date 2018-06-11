const fizzBuzz = () => {
    let fizzCount = 0;
    let buzzCount = 0;
    let fizzbuzzCount = 0;

    for ( let i = 1; i < 100; i++) {
        if (i%3 === 0) {
            fizzCount += 1;
            console.log('fizz');
        }
        if (i%5 === 0) {
            buzzCount += 1;
            console.log('buzz');
        }
        if ( i%3 === 0 && i%5 === 0 ) {
            fizzbuzzCount += 1;
            console.log('fizzbuzz');
        }
    }

    console.log(fizzCount);
    console.log(buzzCount);
    console.log(fizzbuzzCount);
};

fizzBuzz();