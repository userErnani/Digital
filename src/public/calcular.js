// require('dotenv').config()
// const nodemailer = require("nodemailer");


// Aparecer e sumir as DIV impressão com branco
function radioMaterial() {

    let boppPrata = document.getElementById('brancoPrata')
    let boppTrans = document.getElementById('brancoTransp')

        if (boppTrans.checked || boppPrata.checked) {
            branco.style.display = 'block'
        }
        else {
            branco.style.display = 'none'
        }
    return
}
// Aparecer e sumir as DIV impressão com branco
function optionMaterial() {

    let optionMat = document.getElementById("tipoMaterialOptions").value;
    for (let i = 0; i < optionMat.length; i++)
        if (optionMat == 7 || optionMat == 8) {
            brancoOptions.style.display = 'block'
        }
        else {
            brancoOptions.style.display = 'none'
        }
    return
}
// *********************** RADIO *******************************************
//   pegar os valores pelo radios

function calcular() {
    let resultado = document.getElementById('resultado')
    let impDigital = 18     // valor da impressão digital em M²
    let largura = document.getElementById('txtLargura').value
    let altura = document.getElementById('txtAltura').value
    let calc01 = (parseFloat(largura * altura) / 1000).toFixed(4) // Calculo seco largura x altura
    let papelLargura = 197   // largura maxima de impressão
    let totCarreirasMP = parseInt(papelLargura / (parseInt(largura) + 3)) // qtas carreiras cabem na largura x material
    let calc02 = parseInt(215 / totCarreirasMP * (parseInt(altura) + 5)) / 1000
    let quantidadeEtq = document.getElementById('quantidadeEtq').value
    let quantEtiqs = parseInt(quantidadeEtq).toFixed()
    let tipoMaterial = document.getElementsByName("material")
    let lblBranco = ''
    let lblMaterial = ''

    if (  largura == "" || largura <= 9 || largura >=195
        || altura == "" || altura <= 9 || altura >= 296
        || quantidadeEtq <= 99 || quantidadeEtq >= 99000) {
        alert('Prencha com valores validos para obter o calculo')
        return
    } else {
        for (let i = 0; i < tipoMaterial.length; i++)
            if (tipoMaterial[i].checked) {
                var rdMaterial = (parseInt(tipoMaterial[i].value))
            }
        if (rdMaterial == 7 || rdMaterial == 8) {
            let tipoBranco = document.getElementsByName("matBranco")
            for (let i = 0; i < tipoBranco.length; i++)
                if (tipoBranco[i].checked) {
                let matBranco = (parseInt(tipoBranco[i].value))
                if (matBranco == 9) { lblBranco = 22 } // 100% BRANCO
                if (matBranco == 10) { lblBranco = 17 } // 50% BRANCO
                if (matBranco == 11) { lblBranco = 0 } // 0% BRANCO
        }
    }
        if (rdMaterial == 1) { lblMaterial = 2.5 } // COUCHE
        if (rdMaterial == 2) { lblMaterial = 3.5 } // S2045
        if (rdMaterial == 3) { lblMaterial = 4.5 } // BOPP FOSCO / BRILHO
        if (rdMaterial == 4) { lblMaterial = 5.5 } // BOPP FOSCO C2075
        if (rdMaterial == 5) { lblMaterial = 8 } // BOPP BRILHO C2075
        if (rdMaterial == 6) { lblMaterial = 20 } // VINIL
        if (rdMaterial == 7) { lblMaterial = 10 } // BOPP PRATA / OURO
        if (rdMaterial == 8) { lblMaterial = 6 } // BOPP TRANSPARENTE

        let corteMil = 0.03 * quantEtiqs  // cada mil etiq cortada cobra 30.00
        let subtotal = 0

        let soma1 = parseFloat(calc02 * lblMaterial).toFixed(4)
        // soma1 - pega a qtd de M² usada e multiplica pelo valor do material
        let soma2 = parseFloat(calc01 * impDigital).toFixed(4)
        // soma2 - pega a qtd de M² seca e multiplica pelo valor da impressão digital
        let soma3 = 0
        if (rdMaterial == 7 || rdMaterial == 8) {
            soma3 = parseFloat(calc01 * lblBranco).toFixed(4)
        }
        let milesimal = (calc01 / 1000) * quantEtiqs // calcula o M² de 1 etiqueta multiplicando pela qtd solicitada
        if (milesimal <= 4.25) {
            let n100 = 75.00
            let unitario = 0.05 * quantEtiqs
            let result = n100 + unitario + (parseFloat(soma1) + parseFloat(soma3))
            total = result.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }
        else {
            diferenca = 20.00
            subtotal = (((((parseFloat(soma1) + parseFloat(soma2) + parseFloat(soma3)) / 1000) * quantidadeEtq) + diferenca + corteMil))
            total = subtotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }
    }
    
    const dados =( `<h3> ${quantidadeEtq} etiquetas.<br> Na medida ${largura} x ${altura}<br> Valor de ${total}.</h3>`);

    console.log(dados);

    resultado.innerHTML = (`${quantEtiqs} etiquetas = ${total}`) 

}

function dadosCotacao() {

    const emailNome = document.querySelector("#emailNome").value
    const emailEmail = document.querySelector("#emailEmail").value
    const emailTelefone = document.querySelector("#emailTelefone").value
    const emailMensagem = document.querySelector("#emailMensagem").value

    console.log(emailNome, emailEmail, emailTelefone, emailMensagem);

    // let transporter = nodemailer.createTransport({
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
    
    //   // send mail with defined transport object
    //     transporter.sendMail({
    //     from: '"Ernani 👻" <digital@etiquetapontocom.net>', // sender address
    //     to: emailEmail , 
    //     replyTo: 'ernani.acesso@gmail.com',
    //     // list of receivers
    //     subject: "Solicitação de Orçamento", // Subject line
    //     text: "Hello world?", emailNome, emailTelefone, emailMensagem, // plain text body
    //     html: "<b>Hello world?</b>", // html body
    //   }).then(message => {
    //     try {
    //         console.log(message);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //   })

}

//************************** OPTION ****************************************
//   pegar os valores pelos options =  mobile

function calcularOption() {

    let resultado = document.getElementById('resultadoOption')
    let impDigital = 18     // valor da impressão digital em M²
    let largura = document.getElementById('txtLargura').value
    let altura = document.getElementById('txtAltura').value
    let calc01 = (parseFloat(largura * altura) / 1000).toFixed(4) // Calculo seco largura x altura
    let papelLargura = 197   // largura maxima de impressão
    let totCarreirasMP = parseInt(papelLargura / (parseInt(largura) + 3)) // qtas carreiras cabem na largura x material
    let calc02 = parseInt(215 / totCarreirasMP * (parseInt(altura) + 5)) / 1000
    let quantidadeEtq = document.getElementById('quantidadeEtq').value
    let quantEtiqs = parseInt(quantidadeEtq).toFixed()
    let optionMaterial = document.getElementById("tipoMaterialOptions").value;
    let lblOptionMaterial = ''
    let lblOptionBranco = ''

    if (  largura == "" || largura <= 9 || largura >=195
        || altura == "" || altura <= 9 || altura >= 296
        || quantidadeEtq <= 99 || quantidadeEtq >= 99000) {
        alert('Prencha com valores validos para obter o calculo')
    } else {
        for (let i = 0; i < optionMaterial.length; i++)
            if (optionMaterial == 7 || optionMaterial == 8 ) {
                let optionBranco = document.getElementById("brancoOptions").value;
                for (let i = 0; i < optionBranco.length; i++)
                if (optionBranco == 9) { lblOptionBranco = 0 } // 0% BRANCO
                if (optionBranco == 10) { lblOptionBranco = 22 } // 100% BRANCO
                if (optionBranco == 11) { lblOptionBranco = 17 } // 50% BRANCO
            }
        if (optionMaterial == 1) { lblOptionMaterial = 2.5 } // COUCHE
        if (optionMaterial == 2) { lblOptionMaterial = 3.5 } // S2045
        if (optionMaterial == 3) { lblOptionMaterial = 4.5 } // BOPP FOSCO / BRILHO
        if (optionMaterial == 4) { lblOptionMaterial = 5.5 } // BOPP FOSCO C2075
        if (optionMaterial == 5) { lblOptionMaterial = 8 } // BOPP BRILHO C2075
        if (optionMaterial == 6) { lblOptionMaterial = 20 } // VINIL
        if (optionMaterial == 7) { lblOptionMaterial = 10 } // BOPP PRATA / OURO
        if (optionMaterial == 8) { lblOptionMaterial = 6 } // BOPP TRANSPARENTE

        let corteMil = 0.03 * quantEtiqs  // cada mil etiq cortada cobra 30.00
        let subtotal = 0

        let soma1 = parseFloat(calc02 * lblOptionMaterial).toFixed(4)
        // soma1 - pega a qtd de M² usada e multiplica pelo valor do material
        let soma2 = parseFloat(calc01 * impDigital).toFixed(4)
        // soma2 - pega a qtd de M² seca e multiplica pelo valor da impressão digital
        let soma3 = 0
        if (optionMaterial == 7 || optionMaterial == 8) {
            soma3 = parseFloat(calc01 * lblOptionBranco).toFixed(4)
        }
        let milesimal = (calc01 / 1000) * quantEtiqs // calcula o M² de 1 etiqueta multiplicando pela qtd solicitada
        if (milesimal <= 4.25) {
            let n100 = 75.00
            let unitario = 0.05 * quantEtiqs
            let result = n100 + unitario + (parseFloat(soma1) + parseFloat(soma3))
            total = result.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }
        else {
            diferenca = 20.00
            subtotal = ((((parseFloat(soma1) + parseFloat(soma2) + parseFloat(soma3)) / 1000) * quantidadeEtq) + diferenca + corteMil)
            total = subtotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }
    }
    resultado.innerHTML = (`${quantEtiqs} etiquetas = ${total}`)
}
