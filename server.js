const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser  = require("body-parser");
const https = require("https");
const fs = require("fs");
const cors = require('cors');


require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: ['http://localhost:5173',
            'http://ec2-18-119-132-251.us-east-2.compute.amazonaws.com']
}));
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
    console.log("received");
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
    res.send("true")
})

app.listen('4000', () => {

    console.log('Listening at 4000');  

});