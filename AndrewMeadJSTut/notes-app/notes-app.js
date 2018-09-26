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
        noteEl.textContent = eaNote.title
        noteContainer.append(noteEl)
    })
}

const clearAllNotes = () => { // get the container, while container has child keep removing until no child el left
    const noteContainer = document.querySelector('#noteContainer')
    while(noteContainer.firstChild) {
        noteContainer.removeChild(noteContainer.firstChild)
    }
}

const renderNotes = (notes, filters, boolean) => {    
    const filteredNotesArr = filteredNotes(notes, filters)
    clearAllNotes()
    renderNotesToDom(filteredNotesArr)
}

renderNotes(notes, filters)

const createNoteBtn = document.querySelector('#createNote')
createNoteBtn.addEventListener('click', () => e => console.log(e))

const removeAllNoteBtn = document.querySelector('#removeAll')
removeAllNoteBtn.addEventListener('click', () => {
    document.querySelectorAll('.note').forEach( eaNote => eaNote.remove())
})

const searchInput = document.querySelector('#searchText')
searchInput.addEventListener('input', e => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})





