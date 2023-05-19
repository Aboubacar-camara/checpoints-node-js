const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aboubacarcamara2149@gmail.com',
    pass: 'Abc09102002',
  },
});

const mailOptions = {
  from: 'aboubacarcamara2149@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
