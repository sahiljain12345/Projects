const express = require ('express');
const bodyParser = require ('body-parser');
const nodemailer = require('nodemailer');
const { text } = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use (bodyParser.urlencoded({ extended: false}))





  app.post('/api/form', (req, res) => {
    
    console.log(req.body)
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message}`

    nodemailer.createTestAccount((err,account) =>{
        
     
      let transporter = nodemailer.createTransport({
     
        service: 'Gmail',
        auth:{
          user: 'sahiljain18000@gmail.com',
          pass:'@@Sahiljain2399'
        }

      })
        let mailOptions ={
    
          from: name,
          to: 'sahiljain18000@gmail.com',
          subject:'New Message from portdfolio',
          text : content
          

        }

        transporter.sendMail(mailOptions, (err, info) => {
           if(err){
             return console.log(err)
           }

           console.log('Message sent: %s', info.message)
           console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))

        })
    })
    
  })



  

   

const PORT = process.env.PORT || 2222

app.listen(PORT, () => {

  console.log(`Server listening on port ${PORT}`)
})



