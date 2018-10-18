function Particle() {
    this.x = 100;
    this.y = 99;
    this.show = () => {
        console.log(this.x);
    }
}

const p = new Particle();

