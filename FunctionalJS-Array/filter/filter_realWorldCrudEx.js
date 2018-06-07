/*
	~~~~~~~~~~ Mock inputs ~~~~~~~~~~
*/
mock_jsonObjFromServer = [
	{name: 'doggo', id: 1},
	{name: 'paul', id: 2},
	{name: 'lecat', id: 3}
];

mock_stringFromDropDownInput = 'doggo';

/*
	~~~~~~~~~~ Extract Necessary Data ~~~~~~~~~~
*/
function filterMatchNameToAnyObjField(nameInput, arrayOfObj ) {
	return arrayOfObj.filter(data => data.name === nameInput);
}

function returnObjId() {
    return filterMatchNameToAnyObjField(mock_stringFromDropDownInput, mock_jsonObjFromServer)[0].id;
} 

console.log(returnObjId());

// Pass ID to API