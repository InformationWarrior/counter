const app = require('./app');
const log = console.log;

app.listen(3456, (error) => {
    if (!error) {
        log("Server running on PORT 3456");
    }
    else {
        log("Error establishing connection -> ", error);
    }
})