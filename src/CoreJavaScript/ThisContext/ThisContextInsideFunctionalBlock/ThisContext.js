const cleanTable = function(soap) {
    // You should not be allowed to call the window object inside a function scope
    console.log(`cleaning ${this.table} using ${soap}`)
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