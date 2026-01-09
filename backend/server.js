const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Try 587 first with secure: false
  secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use an "App Password", not your login password
    },
   tls: {
    rejectUnauthorized: false
  },
    connectionTimeout: 40000, // Increase to 20 seconds
});

app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
       // IMPORTANT: The 'from' MUST be your own Gmail address (the one in env)
        from: process.env.EMAIL_USER, 
        // This makes it so when you click 'Reply' in your inbox, it goes to the user
        replyTo: email, 
        to: process.env.EMAIL_USER,
        subject: `Portfolio: ${subject || 'New Message'}`,
        text: `You received a message from ${name} (${email}):\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent successfully', info.response);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));