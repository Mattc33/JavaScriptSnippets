// Objective : Finish a Promise before starting a new one
// First cleanRoom
// Second removeGarbage 
// Third getRewarded

let cleanRoom = () => new Promise( (resolve, reject) => {
	resolve(' : Cleaned The Room');
});

let removeGarbage = message => new Promise( (resolve, reject) => {
	resolve(message + ' : Remove Garbage');
});

let winIcecream = message => new Promise( (resolve, reject) => {
	resolve(message + ' : Won Icecream');
});

cleanRoom()
	.then( (result) => removeGarbage(result))
	.then( (result) => winIcecream(result))
    .then( (result) => console.log('runs when everything is done' + result)) // when you execute this function it returns a promise
    
// The run them all in succession, after they are all done
// Place ea promise method in an array and call .then
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then( () => {
	console.log('all finished .all');
});

// To run a callback when even 1 has returned something
// Then call .then to call the callback
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then( () => {
	console.log('all finished .race');
});

