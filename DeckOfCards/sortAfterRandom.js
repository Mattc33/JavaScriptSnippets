const deck = [
    { "rank": "ace", "suit": "clubs", "color": "black" },
    { "rank": "2", "suit": "clubs", "color": "black" },
    { "rank": "3", "suit": "clubs", "color": "black" },
    { "rank": "4", "suit": "clubs", "color": "black" },
    { "rank": "5", "suit": "clubs", "color": "black" },
    { "rank": "6", "suit": "clubs", "color": "black" },
    { "rank": "7", "suit": "clubs", "color": "black" },
    { "rank": "8", "suit": "clubs", "color": "black" },
    { "rank": "9", "suit": "clubs", "color": "black" },
    { "rank": "10", "suit": "clubs", "color": "black" },
    { "rank": "jack", "suit": "clubs", "color": "black" },
    { "rank": "queen", "suit": "clubs", "color": "black" },
    { "rank": "king", "suit": "clubs", "color": "black" },
    { "rank": "ace", "suit": "diamonds", "color": "red" },
    { "rank": "2", "suit": "diamonds", "color": "red" },
    { "rank": "3", "suit": "diamonds", "color": "red" },
    { "rank": "4", "suit": "diamonds", "color": "red" },
    { "rank": "5", "suit": "diamonds", "color": "red" },
    { "rank": "6", "suit": "diamonds", "color": "red" },
    { "rank": "7", "suit": "diamonds", "color": "red" },
    { "rank": "8", "suit": "diamonds", "color": "red" },
    { "rank": "9", "suit": "diamonds", "color": "red" },
    { "rank": "10", "suit": "diamonds", "color": "red" },
    { "rank": "jack", "suit": "diamonds", "color": "red" },
    { "rank": "queen", "suit": "diamonds", "color": "red" },
    { "rank": "king", "suit": "diamonds", "color": "red" },
    { "rank": "ace", "suit": "hearts", "color": "red" },
    { "rank": "2", "suit": "hearts", "color": "red" },
    { "rank": "3", "suit": "hearts", "color": "red" },
    { "rank": "4", "suit": "hearts", "color": "red" },
    { "rank": "5", "suit": "hearts", "color": "red" },
    { "rank": "6", "suit": "hearts", "color": "red" },
    { "rank": "7", "suit": "hearts", "color": "red" },
    { "rank": "8", "suit": "hearts", "color": "red" },
    { "rank": "9", "suit": "hearts", "color": "red" },
    { "rank": "10", "suit": "hearts", "color": "red" },
    { "rank": "jack", "suit": "hearts", "color": "red" },
    { "rank": "queen", "suit": "hearts", "color": "red" },
    { "rank": "king", "suit": "hearts", "color": "red" },
    { "rank": "ace", "suit": "spades", "color": "black" },
    { "rank": "2", "suit": "spades", "color": "black" },
    { "rank": "3", "suit": "spades", "color": "black" },
    { "rank": "4", "suit": "spades", "color": "black" },
    { "rank": "5", "suit": "spades", "color": "black" },
    { "rank": "6", "suit": "spades", "color": "black" },
    { "rank": "7", "suit": "spades", "color": "black" },
    { "rank": "8", "suit": "spades", "color": "black" },
    { "rank": "9", "suit": "spades", "color": "black" },
    { "rank": "10", "suit": "spades", "color": "black" },
    { "rank": "jack", "suit": "spades", "color": "black" },
    { "rank": "queen", "suit": "spades", "color": "black" },
    { "rank": "king", "suit": "spades", "color": "black" }
]


const shuffle = (arr) => {
    const pseudoRandomNumber = parseInt( Date.now().toString().slice(9)) * .0001;
    for ( let i = arr.length - 1; i >= 0; i-- ) {
        const randomNum = Math.floor( pseudoRandomNumber * (i+1) )
        const selectedItem = arr[randomNum];
        arr[randomNum] = arr[i];
        arr[i] = selectedItem;
    }
    return arr;
}

const shuffledDeck = shuffle(deck);
console.log(shuffledDeck);

const filterByKeyValue = (arr, key, value) => arr.filter( card => card[key] === value );

const getXSuits = (arr, key, value) => {
    if ( typeof(arr) !== 'object' ) {
        return 'pass in an array';
    }
    if (key !== 'suit') {
        return 'pass in the valid key: suit'
    }
    if (value === 'clubs' || value === 'diamonds' || value === 'hearts' || value === 'spades') {
        return filterByKeyValue(arr, key, value);
    }
    else {
        return 'error'
    }
}

const assignRankId = (partialDeck) => {
    const newPartialDeck = [];
    for( let i = 0; i < partialDeck.length; i++ ) {
        if( typeof( parseInt(partialDeck[i].rank) ) !== NaN ) {
            partialDeck[i].cid = parseInt(partialDeck[i].rank, 0);
        }
        if(partialDeck[i].rank.toLowerCase() === 'ace') {
            partialDeck[i].cid = 1
        }
        if(partialDeck[i].rank.toLowerCase() === 'jack') {
            partialDeck[i].cid = 11
        }
        if(partialDeck[i].rank.toLowerCase() === 'queen') {
            partialDeck[i].cid = 12
        }
        if(partialDeck[i].rank.toLowerCase() === 'king') {
            partialDeck[i].cid = 13
        }
        newPartialDeck.push(partialDeck[i]);
    }
    return newPartialDeck;
}

const bubbleSort = (arr, key) => {
    let i, j, lim;
    lim = arr.length;
    while(lim--) {
        for(i = 0, j = 1; i < lim; ++i, ++j) {
            if ( arr[i][key] > arr[j][key] ) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const organizeDeck = () => {
    const deckArr = [];
    const diamondsArr = bubbleSort(assignRankId(getXSuits(shuffledDeck, 'suit', 'diamonds')), 'cid');
    const clubsArr = bubbleSort(assignRankId(getXSuits(shuffledDeck, 'suit', 'clubs')), 'cid');
    const heartsArr = bubbleSort(assignRankId(getXSuits(shuffledDeck, 'suit', 'hearts')), 'cid');
    const spadesArr = bubbleSort(assignRankId(getXSuits(shuffledDeck, 'suit', 'spades')), 'cid');
    return deckArr.concat(diamondsArr, clubsArr, heartsArr, spadesArr);
}

console.log(organizeDeck());