console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promiseWifeBringsTicket = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('ticket')
    }, 3000)
})

const getPopcorn = promiseWifeBringsTicket.then( (tix) => {
    console.log('wife: I have the tickets')
    console.log('husband: we should go in')
    console.log('wife: no i am hungry')

    // since wife is hungry we need to return a new promise to get popcorn
    return new Promise( (resolve, reject) => resolve(`${tix} popcorn`) )
})

// * resolve the promise to get wife popcorn
const getButter = getPopcorn.then( (tix) => {
    console.log('husband: I got some popcorn')
    console.log('husband: we should go in')
    console.log('wife: I need butter on my popcorn')

    // since wife needs butter on the popcorn you must make a new promise to get butter
    return new Promise( (resolve, reject) => resolve(`${tix} butter`))
})

getButter.then( (tix) => {
    console.log(tix)
})


console.log('person4: shows ticket')
console.log('person5: shows ticket')