const nodemailer = require('nodemailer')

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
        res.status(201).json({ message: 'Email sent successfully... ' })
    } catch (error) {
        res.status(500).json({ message: 'Error! ' })
    }
}

const getbill = (req, res) => {
    res.status(201).json({ message: 'Getbill successfully... ' })
}

module.exports = {
    signup, getbill
}