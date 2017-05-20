const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Nodemailer
const config = require('./config');

const transporter = nodemailer.createTransport({
  service: config.service,
  auth: {
    user: config.username,
    pass: config.password
  }
});

// REST API
app.use(bodyParser.json());

app.post('/sendmail', function (req, res) {
  if(req.body.mail === undefined || req.body.phone === undefined) {
    res.send("We need an e-mail address or phone number.")
  } else {

    function sprintf(template, values) {
      return template.replace(/%s/g, function() {
        return values.shift();
      });
    }
    let text = sprintf('Nom: %s \nAddresse mail: %s \nNuméro de téléphone: %s \nService désiré: %s \nInformation additionelle: %s', [
      req.body.name, req.body.mail, req.body.phone, req.body.services, req.body.info
    ])

    transporter.sendMail({
      from: config.username,
      to: config.username,
      subject: 'Formulaire glamextensions.ca',
      text : text
    }, function(error, response){
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent.");
      }
    });
    res.status(201).send("Message was sent.");
  }
});

// React
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3000);
