const { createStore } = require('redux')

const initialState = {
    age: 21
}

const myReducer = (state = initialState, action) => {
    // copy of state insdie of newState
    const newState = {...state}

    // Reducer provides the action
    if (action.type === 'ADD') {
        newState.age += 1
    }
    else if (action.type === 'SUBTRACT') {
        newState.age -= 1
    }
    else if (action.type === 'ADD_P') {
        newState.age += action.val
    }
    else if (action.type === 'SUBTRACT_P') {
        newState.age -= action.val
    }

    // It sets a new state inside newState, sort of how state works in redux
    return newState
}

const store = createStore(myReducer);

// ? subscribe after store is created
// ? whenever there is a change of state it automatically runs this function
store.subscribe(() => {
    console.log('state changed, ' + JSON.stringify(store.getState()))
})

// ? Actions are commands

store.dispatch({type: 'ADD'})
store.dispatch({type: 'SUBTRACT'})

// ? dispatch with payload
store.dispatch({type: 'ADD_P', val: 10})
store.dispatch({type: 'SUBTRACT_P', val: 5})

console.log(store.getState())