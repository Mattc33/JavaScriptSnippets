const Food = {
    init: (type) => {  
        this.type = type; // * this.type is a assgined obj var
        console.log(this.type);
    },
    eat: () => {
        console.log(`you ate the ` + this.type);
    }
}

const waffle = Object.create(Food)
waffle.init('waffle')
waffle.eat()


const carrot = Object.create(Food)
carrot.init('carrot')
carrot.eat()