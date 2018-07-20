
// Think of an observable as an array that gets built over time
const observable = rxjs.Observable.create( observer => {
    observer.next( 'Hello' )
    observer.next( 'World' )
})

observable.subscribe( val => print(val))


// helper to print values
function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}




