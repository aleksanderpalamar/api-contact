import express, { Request, Response } from 'express';
import * as nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/Contact', async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },      
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Contact Form site',
      html: `
        <h3>Informações Contact</h3>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Subject: ${subject}</li>
          <li>Message: ${message}</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email enviado com sucesso!');
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar email'})
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});