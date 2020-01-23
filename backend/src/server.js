const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send({ message : "Fala sério!"})
});

app.listen(3333);