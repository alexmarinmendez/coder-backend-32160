require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Este es una prueba de envio luego del stop',
         to: 'whatsapp:+51942270712'
       })
      .then(message => console.log(message.sid))
      .catch(err => console.log(err));