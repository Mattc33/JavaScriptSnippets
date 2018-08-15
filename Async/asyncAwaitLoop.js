const delay = () => new Promise(resolve => setTimeout(resolve, 300));

async function delayedLog(item) {
    await delay();
    console.log(item);
}

// ! run each item in a series
async function processArray(array) {
    for (const item of array) {
        await delayedLog(item);
    }
    console.log('Done');
};

// ! run each item in parallel
// async function processArrayParallel(array) {
//     // map array to promises
//     const promises = array.map(delayedLog);
//     // wait until all promises are resolved
//     await Promise.all(promises);
//     console.log('Done');
// }



processArray([1,2,3,4,5]);
