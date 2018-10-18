const todos = [
    {
        text: 'Order cat food',
        completed: false
    },
    {
        text: 'Clean kitchen',
        completed: true
    },
    {
        text: 'Buy food',
        completed: true
    },
    {
        text: 'Do work',
        completed: false
    },
    {
        text: 'Exercise',
        completed: true
    }
]

// You have 2 todos left
// Add a p for each todo above (use text value)

const incompleteTodos = todos.filter( todo => !todo.completed)

console.log(incompleteTodos)

const summary = document.createElement('h2')
summary.textContent = `Number of incompletes: ${incompleteTodos.length}`
document.querySelector('body').appendChild(summary)

todos.forEach( todo => {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})



// const removePWithThe = () => { // ! remove elements that have 'the'
//     const pWithThe = document.querySelectorAll('p')
//     pWithThe.forEach( eaNode => {
//         if(eaNode.innerText.includes('the')) {
//             eaNode.remove()
//         }
//     })
// }

// removePWithThe()

// // --------------------------------------------------------------------------

// const addNewElement = () => { // ! add a new element, 3 steps
//     const newParagraph = document.createElement('p')
//     newParagraph.innerText = 'hello'
//     document.querySelector('body').appendChild(newParagraph)
// }

// addNewElement()
