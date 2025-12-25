
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, fullName, interest } = req.body;

  if (!email || !fullName) {
    return res.status(400).json({ error: 'Email and Name are required.' });
  }

  // Ensure environment variables are present
  const smtpUser = process.env.SMTP_USER || 'info@dee-coffee.com';
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpPass) {
    console.error('SMTP_PASS is missing');
    return res.status(500).json({ error: 'Server is missing email configuration.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.dee-coffee.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false 
      }
    });

    const mailOptions = {
      from: `"DEE COFFEE Export" <${smtpUser}>`,
      to: email,
      subject: 'Confirmation: Your Coffee Sample Request',
      html: `
        <div style="font-family: Arial, sans-serif; color: #4A3728; max-width: 600px; margin: 0 auto; border: 1px solid #E6D5BC; border-radius: 12px; overflow: hidden; background-color: #FDFBF7;">
          <div style="background-color: #0f291e; padding: 30px; text-align: center;">
            <h1 style="color: #c8a46e; margin: 0;">DEE COFFEE</h1>
          </div>
          <div style="padding: 30px;">
            <h2>Hello ${fullName},</h2>
            <p>We have received your request regarding: <strong>${interest || 'Coffee Samples'}</strong>.</p>
            <p>Our team will contact you within 24-48 hours.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('SMTP Error:', error.message);
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to send email',
      message: error.message 
    });
  }
}
