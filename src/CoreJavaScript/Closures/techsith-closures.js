const passed = 3

const addTo = () => {
    const inner = 2
    return passed + inner
}

console.log(addTo())
console.dir(addTo)

// ! This is a basic example of a closure.
// * in js variables defined outside the function is automatically available inside
// * because js has lexical scoping

// * How is this a closure
// * In order to execute addTo Function. It will look for the variable that it needs.
// * If it can't find the variable inside the function block it will go up every level of parent
// * If it can't find it in the final scope(global) it will error undefined

https://jsfiddle.net/mattc3303/ato67wx0/1/
