const removePWithThe = () => { // ! remove elements that have 'the'
    const pWithThe = document.querySelectorAll('p')
    pWithThe.forEach( eaNode => {
        if(eaNode.innerText.includes('the')) {
            eaNode.remove()
        }
    })
}

removePWithThe()

// --------------------------------------------------------------------------

const addNewElement = () => { // ! add a new element, 3 steps
    const newParagraph = document.createElement('p')
    newParagraph.innerText = 'hello'
    document.querySelector('body').appendChild(newParagraph)
}

addNewElement()
