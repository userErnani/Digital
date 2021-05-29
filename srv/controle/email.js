"use strict";

require('dotenv').config()
const nodemailer = require("nodemailer");


function emailCotacao(){

  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let telefone = document.getElementById('telefone').value
  let mensagem = document.getElementById('mensagem').value

  if (nome == '' || email == '' || telefone == ''){
      alert('Prencha os campos obrigatórios(*)')
  }
  else {

      console.log(nome, email, telefone, mensagem);
  }
}
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    ignoreTLS: true,
    secure: true, // true for 465, false for other ports
    tls: {
         rejectUnauthorized: true
     },
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
    transporter.sendMail({
    from: '"Ernani 👻" <digital@etiquetapontocom.net>', // sender address
    to: 'etiqueta@etiquetapontocom.net, ernani.acesso@gmail.com',
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


//   "use strict";
// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.hostinger.com',
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: 'digital@etiquetapontocom.net', // generated ethereal user
//       pass: 'digiTal2021', // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <digital@etiquetapontocom.net>', // sender address
//     to: 'etiqueta@etiquetapontocom.net , ernani.acesso@gmail.com', // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);


// const nodemailer = require("nodemailer"),
//      smtpTransport = require('nodemailer-smtp-transport');


// const smtpConfig = smtpTransport({
//     host: "smtp.hostinger.com",
//     port: 465,
//     ignoreTLS: true,
//     secure : true,
//     tls: {
//         rejectUnauthorized: true
//     },
//     auth: {
//         user: 'digital@etiquetapontocom.net',
//         pass: 'digiTal2021'
//     }
// });

// const transporter = nodemailer.createTransport(smtpConfig);

// const message  = {
//     from: 'digital@etiquetapontocom.net',
//     to: 'etiqueta@etiquetapontocom.net',
//     subject: "Assunto do Email",
//     text: "Conteúdo do email em texto",
//     html: "<h1>Conteúdo do email em HTML</h1>",
//     headers: {
//         'X-Laziness-level': 1000
//     }
// };


// transporter.sendMail(message, function(error, info) {               
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email enviado ' + message + info.response);
//     }
// });
