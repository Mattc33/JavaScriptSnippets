// fake data
const arr = [
    // [0.125], // Afghantistan prefix 93
    // [0.0268, 0.044, 0.0474], // Russia Mobile prefix 79
    [0.1264, 0.1220], // Albania 355
    [0.3100, 0.2160], // Albania Amc mobile 35568
    [0.3060, 0.2320], // Albania Eagle mobile 35567
    [0.3900, 0.2320] // Albania Plud mobile 35566
]

const meanFn = (array) => {
	const sum = array.reduce((acc, value) => {return acc + value})
	return sum/array.length;
};

const percentDiffFn = (val1, val2) => {
    return (val1 - val2) / (val1) * 100
}

const sumFn = (array) => {
    return array.reduce( (total, num) => { return total + num}, 0 )
}

const subtractMeanSquareResultFn = (array) => {
    const mean = meanFn(array);
    return array.map( (number) => Math.pow((number - mean), 2) );
}

const standardDeviationFn = (array) => {
    const mean = meanFn(array);
    const subtractMeanSquareResult = subtractMeanSquareResultFn(array, mean);
    const sum = sumFn(subtractMeanSquareResult);
    const divide = sum / array.length;
    const squareRoot = Math.sqrt(divide);
    return squareRoot;
} 

const removeOutliersFn = (array) => {
    const mean = meanFn(array);
    const filteredArray = [];
    for ( let i = 0; i < array.length; i++) {
        console.log(array[i]);
        const percentDiff = Math.abs(percentDiffFn(array[i], mean));
        console.log(percentDiff);
        if ( percentDiff <= 30 ) {
            filteredArray.push(array[i]);
        }
    }
    console.log(filteredArray);
    return filteredArray;
}

const smartRateFilter = (array) => {
    const priceArr = [];
    for ( let i = 0; i < array.length; i++) {
        // * if there is only 1 carrier for this prefix
        // * there is no choice 2% markup
        if(arr[i].length === 1) {
            priceArr.push({rate: (arr[i][0] * 1.02).toFixed(4)});
        }
        // * if there is 2 carriers for this prefix
        // * if there is a percent difference of greater then 30%
        // * throw out the higher rate and use the lower rate apply 2% markup
        if(arr[i].length === 2) {
            const sort = arr[i].sort();
            const percentDiff = Math.abs(percentDiffFn(sort[0], sort[1]));
            console.log(percentDiff);
            if (percentDiff >= 30) {
                priceArr.push({rate: (arr[i][0] * 1.02).toFixed(4)})
            }
            if (percentDiff < 30) {
                const mean = meanFn(arr[i]);
                console.log(mean);
                priceArr.push({rate: (mean * 1.02).toFixed(4)})
            }
        }
        // * if there is 3 or more carriers for this prefix
        // * find any extreme outliers and throw them out
        //* find the mean of the remaining and apply 2% markup
        if(arr[i].length >= 3 ) {
            // * search for and throw out outliers
            const removeOutliers = removeOutliersFn(arr[i]);
            const finalRate = meanFn(removeOutliers);
            priceArr.push({rate: (finalRate * 1.02).toFixed(4)});
        }
    }
    return priceArr;
}

console.log(smartRateFilter(arr));
