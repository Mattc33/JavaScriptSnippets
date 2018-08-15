console.log('person1: shows ticket')
console.log('person2: shows ticket')

const preMovie = async () => { // async functions always returns a promise
    // ! following examples resolves everything one by one
    const promiseWifeBringsTickets = new Promise( (resolve, reject) => {
        setTimeout( () => resolve('ticket'), 3000)
    })

    const getPopcorn = new Promise( (resolve, reject) => resolve('popcorn'))

    const getButter = new Promise( (resolve, reject) => resolve('butter'))

    let ticket = await promiseWifeBringsTickets

    console.log(`wife: i have the ${ticket}`)
    console.log('husband: we should go in')
    console.log('wife: no i am hungry')

    let popcorn = await getPopcorn

    console.log(`husband: i got some ${popcorn}`)
    console.log('husband: we should go in')
    console.log('wife: I need butter on my popcorn')

    let butter = await getButter

    console.log('husband: i got some ${butter} on popcorn')
    console.log('husband: anything else darling?')
    console.log('wife: lets go we are late')
    console.log('husband: ok')

    // code after here will need to wait for the promise to finish, 3s
    return ticket
}

preMovie().then(m => console.log(m))

console.log('person4: shows ticket')
console.log('person5: shows ticket')


