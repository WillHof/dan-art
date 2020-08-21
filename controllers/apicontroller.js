const axios = require("axios");
const nodemailer = require("nodemailer");
require('dotenv').config()
module.exports = {
    email: function (req, res) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type:'Oauth2',
                user: 'thehorrorofkurtz@gmail.com',
                clientId:process.env.clientId,
                clientSecret:process.env.clientSecret,
                refreshToken:process.env.refreshToken,
                accessToken:process.env.acccesToken,

            }
        });
        transporter.set('oauth2_provision_cb',(user,renew,callback)=>{
            let accessToken=userTokens[user];
            if(!acccesToken){
                return callback(new Error('Unknown User'));
            }
            else{
                return callback(null,accessToken)
            }
        })
        const mailOptions = {
            from: 'danSite@noreply.com',
            to: 'whof@bu.edu',
            subject: 'Inquiry from Dan\'s Site',
            text: 'From: ' + req.body.fn + ' ' + req.body.ln + 'Email: ' + req.body.email + '\
            \
            '+ req.body.message
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
                res.status(503)
            } else {
                console.log('Email sent:' + info.response)
                res.status(200)
            }
        })
        console.log(req.body)
    }
}
