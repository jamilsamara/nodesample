const express = require('express');
const app = express();
const port = 80;

app.get('/', (req,res) => {
    res.send("Welcome to the home page!");

});

app.listen(port, () => {
    console.log("server started.");
});
