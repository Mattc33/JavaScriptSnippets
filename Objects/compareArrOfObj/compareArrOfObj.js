const fs = require('fs');
const Papa = require('papaparse');

const _New = require('./data/prem_new');
const _Old = require('./data/prem_old');

const outFilename = 'output.json';

const newRatecard = _New.prem_new(); // val is "Hello"
const oldRatecard = _Old.prem_old();

const makeNewObj = (arrayNew, arrayOld) => {
    for (let i = 0; i < arrayNew.length; i++) {
        arrayNew[i].status = 'new';
        for(let x = 0; x < arrayOld.length; x++) {
            if ( arrayNew[i].Prefix === arrayOld[x].Prefix ) {
                if ( arrayNew[i].Rate === arrayOld[x].Rate ) {
                    arrayNew[i].status = 'current';
                }
                if ( arrayNew[i].Rate > arrayOld[x].Rate ) {
                    arrayNew[i].status = 'increase';
                }
                if ( arrayNew[i].Rate < arrayOld[x].Rate ) {
                    arrayNew[i].status = 'decrease';
                }
            }
        }
    }
    return arrayNew;
}

const arrWithStatus = makeNewObj(newRatecard, oldRatecard);

const stringify = JSON.stringify(arrWithStatus);

fs.writeFile(outFilename, stringify, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('FILE SUCCESSFULLY WRITTEN!\n');
}); 







