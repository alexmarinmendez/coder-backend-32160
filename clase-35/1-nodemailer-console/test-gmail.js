import { createTransport } from 'nodemailer';

const TEST_MAIL = 'alexmarinmendez@gmail.com'

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: 'muvrmqoigqbdrbgb'
    }
 });

const mailOptions = {
    from: TEST_MAIL,
    to: ['dalos58.arg@gmail.com', 'naiaralihuel@gmail.com'],
    subject: 'Haz recibido un ascenso!',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}

try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
} catch (error) {
    console.log(err)
}


 