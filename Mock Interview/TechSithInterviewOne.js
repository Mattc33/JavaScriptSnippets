// ! Question 1. Take this object and create an array of only the values
    // ? how do i iterate through an object
    // * let key in obj
    // * The keyValue is key
    // * The value is obj[key]

    let q1x = {
        a:1,
        b:2
    };

    const QOneFn = (obj) => {
        const QOneArr = [];
        for( let key in obj ) {
            console.log(key);
            console.log(obj[key]);
            QOneArr.push(obj[key]);
        }
        return QOneArr;
    }

    console.log(QOneFn(q1x));

    // ? alternate approach


console.log(Object.values(q1x));

// ! Question 2. Reverse a string
    // ? My approach
    // * Add each char to an array then reverse the array and the finally join

    let q2x = "hi";

    const QTwoFn = (str) => {
        const temp = [] // line 31 to 34 is equivalent to str.split(''); split by what? split by each character
        for( let i = 0 ; i < str.length; i++) {
            temp.push(str[i]);
        }
        temp.reverse();
        return temp.join(''); // join with no space in between
    }

    console.log(QTwoFn(q2x));

    // ? Another approach

    const QTwoFn_SecondApproach = (str) =>str.split('').reverse().join('');

    console.log(QTwoFn_SecondApproach(q2x));

// ! Question 3. What Modification can I make in the below code to output both of the object's methos getA and getB
// ! You can only modify the Obj not the object call portion
// const obj = {
//     a: 1,
//     b: 2,
//     getA() {
//        console.log(this.a)
//     },
//     getB() {
//        console.log(this.b)
//     }
// }

// obj.getA().getB(); | You would not be able to run getB() because getB() is not a method of getA(). getA() does not return anything

// ? how would you access getB from getA
// * by returning this, `this` in this context is the entire object itself so you are returning every prop and method for you to access again  

const q3obj = {
    a: 1,
    b: 2,
    getA() {
       console.log(this.a)
       return this;
    },
    getB() {
       console.log(this.b)
       return this.b;
    }
}

console.log(q3obj.getA().getB());


// ! Question 4. Learn Javascript Prototype

// print the elements of the array
Array.prototype.print = () => {
    let result = '';
    this.forEach(e => result += `${e},`);
    console.log(result);
}

[1,2].print();

// ! Question 5.