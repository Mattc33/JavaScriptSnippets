const functions = require('./functions');

// ! to run a simple test
// ! test() takes 2 args
// ! the description of the test
// ! an anonymous fn 
// ! inside the anonymous fn a fn expect
// ! expect calls your method you are testing
// ! a function is chained called toBe to check if the args passed in is indeed correct
// ! toBe is to look for a specific primitive value
// ! check for truthy and falsy values
// ! check for null or undefined

// ? To be is for Primitive Types


test('Adds 2 + 2 = 4', () => {
    expect(functions.add(2,2)).toBe(4);
    }
);

test('Should be Null', () => {
    expect(functions.isNull()).toBeNull();
    }
);

test('Should be Undefined', () => {
    expect(functions.isUndefined()).toBeUndefined();
    }
);

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
    }
);

test('Should be truthy', () => {
    expect(functions.checkValue(1)).toBeTruthy();
    }
);


test('User should be Matt Chan object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Matt', lastName: 'Chan'})
    }
);

// * Less than and greater than
test('Should be under 1600', () => {
    expect(functions.checkWeight(100, 10)).toBeLessThan(1600);
})

// * Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

// * Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'admin', 'karen'];
    expect(usernames).toContain('admin');
})

// * working with async data
// ! assertions, expect a number of assertions are called
// ! used when testng async called when assertiopns of a callback or promised is actually called
// ! make sure for async fns u expect assertions and have a return
test('user fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
});

// * Async Await
// test('user fetched name should be Leanne Graham', async () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
// });

