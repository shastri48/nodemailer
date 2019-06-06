require('dotenv').config();

const nodemailer = require('nodemailer');

//step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

//step 2
let mailOptions = {
    from: '"Abhishek Shastri 👻" <shastri@gmail.com>',
    to: 'a.shastri@gmail.com',
    subject: 'Testing node mailer',
    html: '<h1>Hey this is text from nodemailer test</h1>'
};

//step 3
transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('Error occured', err);
    } else {
        console.log('Email sent !!!!');
    }
});
