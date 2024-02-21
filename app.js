// Importing required modules
const nodemailer = require('nodemailer');

// Configuring SMTP details (use your own SMTP details)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'assg8218@gmail.com',
        pass: 'waep ibsm yepk jxdn'
    }
});

// Function to send email
function sendEmail(to, subject, text) {
    // Email options
    const mailOptions = {
        from: 'asek05052005@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    // Sending email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Error occurred:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// Calling the sendEmail function with sample data
sendEmail('asek05052005@gmail.com', 'Test Subject', 'This is a test email sent using Node.js and Nodemailer.');
