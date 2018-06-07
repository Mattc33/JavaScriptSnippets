const testArr = [0.2101, 0.0232];
console.log(testArr.length);

// ======================================================================================

// Sort the array from lowest to highest
const sortArr = (array) => {
    return array.sort();
}

console.log(sortArr(testArr));

// Throwing out the outliers
// If the data set is <= 5 throw out the highest and lowest values

// If variance is low do not remove values
// If variance is high slice off depending on the where the outlier is
const removeOutlierArr = (array) => {
    // if (array.length <= 9) {
    //     return array.slice(1, -1);
    // }
    // if (array.length >= 10) {
    //     const sliceAmount = Math.round(array.length * .2);
    //     return array.slice(sliceAmount, -sliceAmount)
    // }
}

const processedArr = removeOutlierArr(sortArr(testArr));
// console.log(processedArr);
// console.log(processedArr.length);


// ======================================================================================

const mean = (array) => {
	const sum = array.reduce((acc, value) => {return acc + value})
	return sum/array.length;
};

console.log(mean(testArr));

const diffFromMean = (array, meanFn) => {
    const mean = meanFn(array);
    return array.map( (num) => {return num-mean});
}

console.log(diffFromMean(testArr, mean));

const diffFromMeanSq = (array, meanFn) => {
    const mean = meanFn(array);
    return array.map( (num) => { return Math.pow(num-mean, 2) });
}

console.log(diffFromMeanSq(testArr, mean));

const diffFromMeanSqValue = diffFromMeanSq(testArr, mean);
const variance = mean(diffFromMeanSqValue);

console.log(variance);  

// ======================================================================================

// Compact Variance Formula
// 1. Find the mean of the array
// 2. 

const varianceCompact2 = (array, meanFn, diffFromMeanSqFn) => {
    const mean = meanFn(array);
    const diff = diffFromMeanSqFn(array, meanFn)
    return meanFn(diff);
}

const varianceCompact = (array) => {
    const mean = array.reduce((acc, value) => {return acc + value})/array.length;
    const diff = array.map( (num) => { return Math.pow(num-mean, 2)});
    const variance = diff.reduce((acc, value) => {return acc + value})/array.length;
	return variance;
}

console.log(varianceCompact(testArr, mean, diffFromMeanSq));


