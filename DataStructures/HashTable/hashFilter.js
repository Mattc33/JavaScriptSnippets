const array = [
    { carrier_id: 1, 
        rates: [
            { prefix: "1", sellrate: "a" }, 
            { prefix: "2", sellrate: "b" }
        ] 
    }, 
    { carrier_id: 2, 
        rates: [
            { prefix: "3", sellrate: "c" }, 
            { prefix: "4", sellrate: "d" }
        ] 
    }, 
    { carrier_id: 1, 
        rates: [
            { prefix: "5", sellrate: "e" }, 
            { prefix: "6", sellrate: "f" }
        ] 
    }, 
    { carrier_id: 2, 
        rates: [
            { prefix: "7", sellrate: "g" }, 
            { prefix: "8", sellrate: "h" }
        ] 
    }
];


    hash = Object.create(null),
    result = array.filter( (obj) => {
        if (!hash[obj.carrier_id]) {
            hash[obj.carrier_id] = obj.rates;
            return true;
        }
        Array.prototype.push.apply(hash[obj.carrier_id], obj.rates);
    });

console.log(result);
