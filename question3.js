const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
    res.send('Express is working! Write your full name');
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });