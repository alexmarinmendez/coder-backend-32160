import { createTransport } from 'nodemailer';

const TEST_MAIL = 'amir.kuvalis@ethereal.email'

const transporter = createTransport({
   host: 'smtp.ethereal.email',
   port: 587,
   auth: {
       user: TEST_MAIL,
       pass: 'qwRnR4RjUZ6fW27fbV'
   }
});

const mailOptions = {
    from: 'ceo@coderhouse.com',
    to: 'alexmarinmendez@gmail.com',
    subject: 'Haz recibido un ascenso!',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}

try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
} catch (error) {
    console.log(err)
}
 
