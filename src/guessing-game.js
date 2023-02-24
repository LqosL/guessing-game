class GuessingGame {
    constructor() {
        this.range = [0, 10]
    }

    setRange(min, max) {
        this.range = [min, max]

    }

    guess() {
        return Math.round((this.range[1]-this.range[0])/2 + this.range[0])
    }

    lower() {
        this.range = [this.range[0], this.guess()]
    }

    greater() {
        this.range = [ this.guess(), this.range[1]]

    }
}

module.exports = GuessingGame;
