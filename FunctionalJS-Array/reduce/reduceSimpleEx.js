var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

// sum of all amounts in order
let totalAmount = 0;
for ( let i = 0; i<orders.length; i++ ) {
    totalAmount += orders[i].amount;
}

console.log(totalAmount);

const totalAmountReduce = orders.reduce( function(sum, order) {
    console.log(sum, order);
    return sum + order.amount;
}, 0);

console.log(totalAmountReduce);



