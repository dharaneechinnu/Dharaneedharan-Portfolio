var nodemailer = require('nodemailer');


const sendMail = (req,res)=>{
    const {name, email, message} = req.body;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dharaneedharanchinnusamy@gmail.com',
          pass:  process.env.PASS
        }
      });
      
      var mailOptions = {
        from: 'dharaneedharanchinnusamy@gmail.com',
        to: 'dharaneedharanchinnusamy@gmail.com',
        subject: 'Message From Portfolio',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.status(500).json({"message":"Network Error Please Try Again"})
          console.log(error);
        } else {
            console.log("success")
          res.status(200).json({"message": "Message send Successfully"})
        }
      });
    
}

module.exports={sendMail}