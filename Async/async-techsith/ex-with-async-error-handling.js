// ! what is your api does not suceed
// ! how to handle reject scenarios

const preMovie = async () => {

    const promiseWifeBringsTickets = new Promise( (resolve, reject) => {
        setTimeout(() => reject('ticket'), 3000);
    })

    try {
        let ticket = await promiseWifeBringsTickets
    } catch(err) {
        ticket = 'sad face'
    }

    return ticket
}

preMovie().then( (tix) => {
    console.log(tix)
})

