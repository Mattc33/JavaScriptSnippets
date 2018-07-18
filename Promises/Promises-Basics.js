const keepsHisWord = true;

const _promise = new Promise( (resolve, reject) => {
    if(keepsHisWord) {
        resolve("the truth");
    } else {
        reject("is false")
    }
});

console.log(_promise);