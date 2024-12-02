var counter = 0;

const addCounter = (req, res) => {
    if (counter < 10) {
        counter++;
        res.json({
            counter: counter
        });
    }

    else {
        res.json({
            message: "Counter reached its max limit."
        });
    }
}

const subtractCounter = (req, res) => {
    if (counter > 0) {
        counter--;
        res.json({
            counter: counter
        });
    }

    else {
        res.json({
            message: "Counter is zero"
        });
    }
}

const resetCounter = (req, res) => {
    counter = 0;
    res.json({
        counter: counter,
        message: "Counter reset to zero"
    });
}

module.exports = {
    addCounter,
    subtractCounter,
    resetCounter
};
