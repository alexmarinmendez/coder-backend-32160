import twilio from 'twilio'

const accountSid = 'ACc6818acd59386a9f0cdeb50d08ac83c8'
const authToken = '0fc81403f0c4548f030c0a22dcc1a8c7'

const client = twilio(accountSid, authToken)

try {
   const message = await client.messages.create({
      body: 'Hola soy un SMS desde Node.js!',
      from: '+13149473203',
      to: '+51942270712'
   })
   console.log(message)
} catch (error) {
   console.log(error)
}
