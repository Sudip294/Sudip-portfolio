const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use an "App Password", not your login password
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  res.status(200).json({ success: true, message: "Message received" });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message: ${subject}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    });
  } catch (err) {
    console.error("Mail error:", err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));