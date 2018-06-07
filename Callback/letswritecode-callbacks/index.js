const fs = require('fs');

const getBears = (filepath, done) => {
    fs.readFile(filepath, (err, bears) => {
        if (err) return done(err)

        fs.readFile('bears.dictionary', (err, dict) => {
            if (err) return done(err)

            compareBears(bears, dict);
        })
    })

    const compareBears = (bears, dict) => {
        const dict = dict.toString().split('\n')
        const bears = bears.toString().split('\n').filter( (bears) => {
            return dict.indexOf(bear) !== -1
        })
        done(null, bears);
    }
}

// * function compareBears is hoisted up to the top of the local fn




