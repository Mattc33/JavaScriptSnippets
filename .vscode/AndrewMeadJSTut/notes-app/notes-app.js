// --------------------------------------------------------------------------- //
// * --- declare data -------------------------------------------------------- //
// --------------------------------------------------------------------------- //

const notes = [
    {
        title: 'title one',
        body: 'body one body one'
    },
    {
        title: 'title two',
        body: 'body two body two'
    },
    {
        title: 'title three',
        body: 'body three body three'
    }
]

const filters = { // * setup a filter object to store the latest filter
    searchText: ''
}

// --------------------------------------------------------------------------- //
// * --- render notes methods ------------------------------------------------ //
// --------------------------------------------------------------------------- //
const filteredNotes = (notes, filters) => notes.filter( eaNote => {
    return eaNote.title.toLowerCase()
        .includes(filters.searchText.toLowerCase())
})

const renderNotesToDom = (filteredNotes) => {
    const noteContainer = document.querySelector('#noteContainer')
    filteredNotes.forEach( eaNote => {
        const noteEl = document.createElement('p')
        noteEl.textContent = `${eaNote.title} - ${eaNote.body}`
        noteContainer.append(noteEl)
    })
}

const clearAllNotes = () => { // get the container, while container has child keep removing until no child el left
    const noteContainer = document.querySelector('#noteContainer')
    while(noteContainer.firstChild) {
        noteContainer.removeChild(noteContainer.firstChild)
    }
}

// --------------------------------------------------------------------------- //
// * --- render Notes Init Fn ------------------------------------------------ //
// --------------------------------------------------------------------------- //

const renderNotes = (notes, filters) => {    
    const filteredNotesArr = filteredNotes(notes, filters)
    clearAllNotes() // wipe all notes that been added before adding new notes
    renderNotesToDom(filteredNotesArr)
}

renderNotes(notes, filters)

// --------------------------------------------------------------------------- //
// * --- submit Form --------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// ! task
// 1. Create a form with a single input for todo text
// 2. Setup an submit handler and cancel the default action
// 3. Add a new item to the todos array with that text data (completed value of false)
// 4. Rerender the application
// 5. clear the input field value

const submitNotesForm = document.querySelector('#notes-form')
submitNotesForm.addEventListener('submit', e => {
    e.preventDefault()
    notes.push(
        {
            title: e.target.elements.title.value,
            body: e.target.elements.body.value
        }
    )
    renderNotes(notes, filters)
    e.target.elements.body.value = ''
})

// --------------------------------------------------------------------------- //
// * --- Others -------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

const searchInput = document.querySelector('#searchText')
searchInput.addEventListener('input', e => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})





