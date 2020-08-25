const axios = require("axios");
const nodemailer = require("nodemailer");
require('dotenv').config()
module.exports = {
    email: function (req, res) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'Oauth2',
                user: 'thehorrorofkurtz@gmail.com',
                clientId: process.env.clientId,
                clientSecret: process.env.clientSecret,
                refreshToken: process.env.refreshToken,
                accessToken: process.env.acccesToken,

            }
        });
        transporter.set('oauth2_provision_cb', (user, renew, callback) => {
            let accessToken = userTokens[user];
            if (!acccesToken) {
                return callback(new Error('Unknown User'));
            }
            else {
                return callback(null, accessToken)
            }
        })
        const today = new Date();
        const month = today.getMonth() + 1;
        const mailOptions = {
            from: 'danSite@noreply.com',
            to: 'dhworks5012@gmail.com',
            subject: 'Inquiry from Dan\'s Site on ' + month + '/' + today.getDate() + '/' + today.getFullYear(),
            html: `<p>From: ${req.body.fn} ${req.body.ln} </p>  <p>Email: ${req.body.email}</p><p>${req.body.message}</p> `
        };
        transporter.set('oauth2_provision_cb', (user, renew, callback) => {
            let accessToken = userTokens[user];
            if (!acccesToken) {
                return callback(new Error('Unknown User'));
            }
            else {
                return callback(null, accessToken)
            }
        })

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                console.log('Email sent:' + info.response)
                res.json("ok")
            }
        })
    }
}
