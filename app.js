const express = require('express');
const counterRouter = require('./counter.router');
const log = console.log;
const app = express();

app.use(express.json());
app.use('/', counterRouter);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the counter app." });
});

module.exports = app;