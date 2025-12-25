
/**
 * Serverless function to handle automated email responses via SMTP.
 * Configured specifically for cPanel Secure SSL/TLS settings.
 */

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, fullName, interest } = req.body;

  if (!email || !fullName) {
    return res.status(400).json({ error: 'Email and Name are required.' });
  }

  try {
    // 1. Create a transporter using your cPanel SMTP settings from the screenshot
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.dee-coffee.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // Use SSL/TLS for Port 465
      auth: {
        user: process.env.SMTP_USER || 'info@dee-coffee.com',
        pass: process.env.SMTP_PASS, // This MUST be set in your Environment Variables
      },
      // Increase timeout for shared hosting environments
      connectionTimeout: 10000, 
      greetingTimeout: 10000,
    });

    // 2. Define the email content with professional HTML styling
    const mailOptions = {
      from: `"DEE COFFEE Export" <${process.env.SMTP_USER || 'info@dee-coffee.com'}>`,
      to: email,
      subject: 'Confirmation: Your Coffee Sample Request',
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4A3728; max-width: 600px; margin: 0 auto; border: 1px solid #E6D5BC; border-radius: 12px; overflow: hidden; background-color: #FDFBF7;">
          <div style="background-color: #0f291e; padding: 40px; text-align: center;">
            <h1 style="color: #c8a46e; margin: 0; font-size: 28px; letter-spacing: 2px;">DEE COFFEE</h1>
            <p style="color: #ffffff; margin-top: 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Premium Ethiopian Coffee Exporters</p>
          </div>
          <div style="padding: 40px; line-height: 1.6;">
            <h2 style="color: #2C1810; font-size: 22px;">Hello ${fullName},</h2>
            <p style="font-size: 16px;">Thank you for reaching out to us. We have successfully received your request regarding:</p>
            <div style="background-color: #ffffff; border-left: 4px solid #c8a46e; padding: 15px 20px; margin: 25px 0; font-style: italic; color: #6F4E37; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
              "${interest}"
            </div>
            <p style="font-size: 16px;">Our export specialists are currently reviewing your requirements. You can expect a detailed proforma invoice and sample shipping information within <strong>24 to 48 business hours</strong>.</p>
            <p style="font-size: 16px;">While you wait, we invite you to browse our latest harvest gallery on our website.</p>
            <div style="text-align: center; margin-top: 35px;">
              <a href="https://dee-coffee.com" style="background-color: #c8a46e; color: #2C1810; padding: 14px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block; box-shadow: 0 4px 6px rgba(200, 164, 110, 0.2);">Visit Our Website</a>
            </div>
            <div style="margin-top: 50px; padding-top: 25px; border-top: 1px solid #E6D5BC; font-size: 13px; color: #8C7A6B;">
              <p style="margin: 0;">Best Regards,</p>
              <p style="margin: 5px 0; font-weight: bold; color: #2C1810;">The DEE COFFEE Export Team</p>
              <p style="margin: 0;">Addis Ababa, Ethiopia</p>
              <p style="margin: 15px 0 0 0;"><em>Please do not reply directly to this automated message.</em></p>
            </div>
          </div>
          <div style="background-color: #f5f2eb; padding: 20px; text-align: center; font-size: 12px; color: #A69076;">
            &copy; ${new Date().getFullYear()} DEE COFFEE Exporters. All Rights Reserved.
          </div>
        </div>
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Auto-response sent successfully.' });
  } catch (error) {
    console.error('SMTP Error:', error);
    // Silent fail on email to ensure the user still sees the "Success" screen on front-end
    return res.status(200).json({ 
      message: 'Data saved, but auto-responder failed.', 
      error: error.message 
    });
  }
}
