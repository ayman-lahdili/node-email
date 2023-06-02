const express = require("express");

const app = express(),
    PORT = 3000,
    URL = 'http://127.0.0.1' + ':' + PORT;

app.get("/", (req, res) => {

    res.send("GET REQUEST SUCCESSFUL");

})



app.listen(PORT, () => {

    console.log('Listening at '+ URL);  

});