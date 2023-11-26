const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is a test of the banking API. Successful.');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The server is now running on Port ${PORT}`);
});