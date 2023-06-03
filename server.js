const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser  = require("body-parser");

require('dotenv').config();

const app = express(),
    PORT = 3000,
    URL = 'http://127.0.0.1' + ':' + PORT;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.get("/", (req, res) => {
    res.send("GET REQUEST SUCCESSFUL");
})

app.post("/sendEmail", (req, res) => {
    const body = req.body;
    console.log(body);

    var options = {
        from: process.env.EMAILUSER,
        to: process.env.EMAILUSER,
        subject: body.subject,
        text: body.text
    };

    transporter.sendMail(options, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    }); 

    res.send("POST REQUEST SUCCESSFUL EMAIL SENT TO "+body.email);
})

app.listen(PORT, () => {

    console.log('Listening at '+ URL);  

});