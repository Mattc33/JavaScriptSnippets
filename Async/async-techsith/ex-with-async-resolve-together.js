// ! mock api where each api is a promise 
// ! waits for all promises to resolve or reject before performing some action

const mockHttpCall = async () => {
    const firstApiCall = new Promise( (resolve, reject) => {
        setTimeout(() => resolve('My '), 2000)
    })

    const secondApiCall = new Promise( (resolve, reject) => {
        setTimeout(() => resolve('Name '), 2000)
    })

    const thirdApiCall = new Promise( (resolve, reject) => {
        setTimeout(() => resolve('Is Matt'), 2000)
    })

    let [firstApi, secondApi, thirdApi] = await Promise.all([firstApiCall, secondApiCall, thirdApiCall])
    const combined = `${firstApi}${secondApi}${thirdApi}`
    
    return combined
}

mockHttpCall().then( (data) => {
    console.log(data)
})