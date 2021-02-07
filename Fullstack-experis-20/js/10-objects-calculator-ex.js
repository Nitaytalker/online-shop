const calculator = {
    sum: 0,
    add(number) {
        this.sum += number;
        return this;
    },
    mul(number) {
        this.sum *= number;
        return this;
    },
    div(number) {
        if(number != 0){
            this.sum /= number;
        }
        return this;
    },
    result() {
        console.log(this.sum);
        return this;
    },
    reset() {
        this.sum = 0;
        return this;
    },
    round() {
        this.sum = Math.round(this.sum);
        return this;
    }
}


// Make this code work:
calculator.add(1);
calculator.add(2);
calculator.result(); //3
calculator.mul(10);
calculator.result(); //30
calculator.div(3);
calculator.result(); //10
calculator.reset();
calculator.add(-10);
calculator.mul(4);
calculator.result();//-40

// Bonus:
// Enable this code to work as well:
calculator.add(1).add(2).result(); //-37
calculator.mul(10).result(); //30
calculator.div(3).round().result(); //10

calculator.reset().add(11).mul(11).result().reset().add(100).div(10).result();



const calculator2 = {
    sum: -100,
    add(number) {
        this.sum += number;
        return this;
    },
    mul(number) {
        this.sum *= number;
        return this;
    },
    div(number) {
        if(number != 0){
            this.sum /= number;
        }
        return this;
    },
    result() {
        console.log(this.sum);
        return this;
    },
    reset() {
        this.sum = -100;
        return this;
    },
    round() {
        this.sum = Math.floor(this.sum);
        return this;
    }
}