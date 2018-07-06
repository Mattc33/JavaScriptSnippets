const arrObjOld = [
    {'prefix': 1, 'rate': 1.00},
    {'prefix': 2, 'rate': 1.00},
    {'prefix': 3, 'rate': 4.00},
    {'prefix': 4, 'rate': 4.00}
];

const arrObjNew = [
    {'prefix': 1, 'rate': 1.00}, // current
    {'prefix': 2, 'rate': 2.00}, // increase
    {'prefix': 3, 'rate': 3.00}, // decrease
    {'prefix': 4, 'rate': 4.00}, // current
    {'prefix': 5, 'rate': 5.00} // new
];

const makeNewObj = (arrayNew, arrayOld) => {
    for (let i = 0; i < arrayNew.length; i++) {
        arrayNew[i].status = 'new';
        for(let x = 0; x < arrayOld.length; x++) {
            if ( arrayNew[i].prefix === arrayOld[x].prefix ) {
                if ( arrayNew[i].rate === arrayOld[x].rate ) {
                    arrayNew[i].status = 'current';
                }
                if ( arrayNew[i].rate > arrayOld[x].rate ) {
                    arrayNew[i].status = 'increase';
                }
                if ( arrayNew[i].rate < arrayOld[x].rate ) {
                    arrayNew[i].status = 'decrease';
                }
            }
        }
    }
    return arrayNew;
}

const arrWithStatus = makeNewObj(arrObjNew, arrObjOld);
console.log(arrWithStatus);