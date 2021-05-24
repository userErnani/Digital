"use strict";

require('dotenv').config()
const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
    transporter.sendMail({
    from: '"Ernani 👻" <digital@etiquetapontocom.net>', // sender address
    to: 'etiqueta@etiquetapontocom.net ; ernani.acesso@gmail.com',
    // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }).then(message => {
    try {
        console.log(message);
    } catch (error) {
        console.log(error);
    }

  })
