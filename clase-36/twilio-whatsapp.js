require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({ 
         body: 'Te adjunto los diseños', 
         mediaUrl: [
            'https://styles.redditmedia.com/t5_5blkvq/styles/communityIcon_t5ji6wuld2z71.jpg',
            'https://pbs.twimg.com/media/FgfgiJAXwAAlGA0.jpg'
        ], 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+51942270712' 
       }) 
      .then(message => console.log(message.sid)) 
      .catch(err => console.log(err));