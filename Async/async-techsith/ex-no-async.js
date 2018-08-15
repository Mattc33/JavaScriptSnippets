console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promiseFriendBringsTicket = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('ticket')
    }, 3000)
})
.then((t) => {
    console.log(`person3: shows ${t}`)
})

console.log('person4: shows ticket')
console.log('person5: shows ticket')

// ! as you can see javascript did not wait for person 3 by default, the code ran down the file
// ! in sequence forcing the code to wait untill the end

// ! The reason why this might not be a good idea is because 'person 3' may have to run first
// ! before other code executes