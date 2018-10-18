const cleanTable = function(soap) {

    const innerFn = function(_soap) {
        // console.log(`cleaning ${this.table} using ${_soap}`)

        // ? This will end up being undefined becuase its in a inner functional scope
        // ? There are 3 solutions to this problem

        // ! Solution 1:
        // * setting a local scoped variable = to the this context
        // * this is not a good solution
        // let that = this
        // console.log(`cleaning ${that.table} using ${_soap}`)

        // ! Solution 2:
        // * still using the same this setup but using bind to pass the context of this
        // * to the inner function
        console.log(`cleaning ${this.table} using ${_soap}`)

        // ! Solution 3:
        // * still using the same this setup but using call to pass both the arg
        // * and the this context to the inner function
        console.log(`cleaning ${this.table} using ${_soap}`)
    }

    // ! Solution 2:
    innerFn.bind(this)(soap)

    // ! Solution 3:
    innerFn.call(this, soap)

    // ! Solution 4:
    // * By using a arrow function the inner functional block automatically gains
    // * the correct context of this from the outer function
    const innerFnArrow = _soap => console.log(`cleaning ${this.table} using ${_soap}`)
    innerFnArrow(soap)

    // innerFn(soap)
    // You should not be allowed to call the window object inside a function scope
 }

// ===============================================================================================================

this.table = "WINDOW TABLE" // this is a prop inside window object
cleanTable.call(this, 'some soap') // binding the window obj so cleanTable Fn has access to its props

// ===============================================================================================================

this.garage = { // this is a object literal inside window object
    table: 'GARAGE TABLE'
}
cleanTable.call(this.garage, 'some soap')

// ===============================================================================================================

let johnsRoom = { // this is a object literal assigned to a variable, in the context of the local file variable
    table: 'JOHNS TABLE'
}
cleanTable.call(johnsRoom, 'some soap') // pass the reference of johnsRoom's object literal so cleanTable knows about the obj 
// its contents

// ! you can use call to use someone elses method of someone elses object