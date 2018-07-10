// ! standard deviation is a measure of how spread out numbers are

const arr = [99, 56, 78, 40, 31, 51, 11, 20, 3, 10];

const subtractMeanSquareResultFn = (array, mean) => {
    return array.map( (number) => Math.pow((number - mean), 2) );
}
    
const meanFn = (array) => {
	const sum = array.reduce((acc, value) => {return acc + value})
	return sum/array.length;
};

const sumFn = (array) => {
    return array.reduce( (total, num) => { return total + num}, 0 )
}

const percentDiffFn = (val1, val2) => {
    return ((val1 - val2) / val1) * 100
}

const standardDeviationFn = (array) => {
    const mean = meanFn(array);
    const subtractMeanSquareResult = subtractMeanSquareResultFn(array, mean);
    const sum = sumFn(subtractMeanSquareResult);
    const divide = sum / array.length;
    const squareRoot = Math.sqrt(divide);
    return squareRoot;
} 

console.log(standardDeviationFn(arr));

// * check against every number in the array if the % difference is large > 30% throw those out

const removeOutliers = (array) => {
    const standardDeviation = standardDeviationFn(array);
    console.log(standardDeviation);
    const filteredArray = [];

    for ( let i = 0; i < array.length; i++) {
        console.log(array[i]);
        const percentDiff = percentDiffFn(array[i], standardDeviation);
        console.log(Math.abs(percentDiff));
        
        if ( percentDiff <= 30 ) {
            filteredArray.push(array[i]);
        }
    }
    console.log(filteredArray);

    // * from here we can take the mean of this group
    const finalRate = meanFn(filteredArray);
    console.log(finalRate);
    return finalRate;

    // * if the filtered result comes to below half adjust your acceptable percentDiff

}

removeOutliers(arr);




