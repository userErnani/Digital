
require('dotenv').config()
const nodemailer = require("nodemailer");

const teste = (req, res) => {

const txtQtd = req.body.txtQtd
const txtLargura = req.body.n1
const txtAltura = req.body.n2


// console.log(nome)


    try { 

        console.log('deu certo' , txtQtd, txtLargura, txtAltura)
  
    } catch (error) {
        res.send(error)
    }
}


const sendMail = async (req, res) => {


console.log('passou');


//   let transporter = nodemailer.createTransport({
//     host: process.env.HOST,
//     port: 465,
//     ignoreTLS: true,
//     secure: true, // true for 465, false for other ports
//     tls: {
//          rejectUnauthorized: true
//      },
//     auth: {
//       user: process.env.USER, // generated ethereal user
//       pass: process.env.PASS, // generated ethereal password
//     },
//   });

//     transporter.sendMail({
//     from: '"Ernani" <digital@etiquetapontocom.net>', // sender address
//     to: 'etiqueta@etiquetapontocom.net, ernani.acesso@gmail.com',
//     replyTo: 'digital@etiquetapontocom.net',
//     subject: "Você solicitou um orçamento sobre as etiquetas:  ",
//     text: "Este é um email de teste, espero que receba ...", 
//     // html: "<b>Hello world?</b>", // html body
//   }).then(message => {
//     try {
//         res.send(message);
//     } catch (error) {
//         res.send(error);
//     }
//   })
}
 
module.exports = {teste, sendMail}