const testUserForm = async () => {
    const loadUserForm = new Promise( (resolve, reject) => {
        setTimeout( () => resolve('page loaded'), 3000)
    })

    const enterUserName = new Promise( (resolve, reject) => {
        setTimeout( () => resolve('page loaded'), 3000)
    })

    const verifyUserDetails = () => {

    }

    await loadUserForm
    await enterUserName
    return verifyUserDetails()
}