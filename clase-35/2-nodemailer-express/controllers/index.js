const nodemailer = require('nodemailer')
const Mailgen = require('mailgen')

const signup = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
     });
    const message = {
        from: 'ceo@coderhouse.com',
        to: 'alexmarinmendez@gmail.com',
        subject: 'correo desde la api',
        html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
    }
    try {
        const info = await transporter.sendMail(message)
        res.status(201).json({ 
            message: 'Email sent successfully... ', 
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    } catch (error) {
        res.status(500).json({ message: 'Error! ' })
    }
}

const getbill = async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: 'alexmarinmendez@gmail.com',
            pass: 'muvrmqoigqbdrbgb'
        }
     });
    
    let Mailgenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Bicicletas Alezhia",
            link: "http://bicicletasalezhia.com"
        }
    })

    let response = {
        body: {
            intro: "La cuenta de tu compra es:",
            table: {
                data: [
                    {
                        item: "Awesome bicicleta",
                        description: "An awasome bicicleta",
                        price: "USD 1900"
                    }
                ]
            },
            outro: "No olvides que puedes pagar de varias formas"
        }
    }

    let mail = Mailgenerator.generate(response)

    const mailOptions = {
        from: 'alexmarinmendez@gmail.com',
        to: ['dalos58.arg@gmail.com', 'naiaralihuel@gmail.com'],
        subject: 'La factura de tu compra',
        html: mail
    }
    
    try {
        const info = await transporter.sendMail(mailOptions)
        res.status(201).json({ message: 'Getbill successfully... ' })
    } catch (error) {
        res.status(500).json({ message: 'Error' })
    }
    
}

module.exports = {
    signup, getbill
}