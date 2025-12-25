
/**
 * Serverless function to handle automated email responses via SMTP.
 * Configured specifically for cPanel Secure SSL/TLS settings.
 */

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, fullName, interest } = req.body;

  // 2. Validate input
  if (!email || !fullName) {
    return res.status(400).json({ error: 'Email and Name are required.' });
  }

  // 3. Check for required Environment Variables
  if (!process.env.SMTP_PASS) {
    console.error('CRITICAL: SMTP_PASS environment variable is missing.');
    return res.status(500).json({ 
      error: 'Server configuration error: SMTP_PASS is not set.',
      hint: 'Please add SMTP_PASS to your environment variables in your hosting dashboard.'
    });
  }

  try {
    // 4. Create a transporter with specific cPanel compatibility settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.dee-coffee.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // Use SSL/TLS for Port 465
      auth: {
        user: process.env.SMTP_USER || 'info@dee-coffee.com',
        pass: process.env.SMTP_PASS, 
      },
      tls: {
        // This is important for many cPanel/Shared hosting setups that might have
        // certificate hostname mismatches or self-signed certs.
        rejectUnauthorized: false 
      },
      connectionTimeout: 15000, 
      greetingTimeout: 15000,
    });

    // 5. Verify the connection before trying to send
    await transporter.verify();
    console.log('SMTP connection verified successfully.');

    // 6. Define the email content
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
              "${interest || 'Coffee Sample Request'}"
            </div>
            <p style="font-size: 16px;">Our export specialists are currently reviewing your requirements. You can expect a response within <strong>24 to 48 business hours</strong>.</p>
            <div style="text-align: center; margin-top: 35px;">
              <a href="https://dee-coffee.com" style="background-color: #c8a46e; color: #2C1810; padding: 14px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">Visit Our Website</a>
            </div>
            <div style="margin-top: 50px; padding-top: 25px; border-top: 1px solid #E6D5BC; font-size: 13px; color: #8C7A6B;">
              <p style="margin: 0;">Best Regards,</p>
              <p style="margin: 5px 0; font-weight: bold; color: #2C1810;">The DEE COFFEE Export Team</p>
              <p style="margin: 0;">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
      `,
    };

    // 7. Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);

    return res.status(200).json({ success: true, message: 'Auto-response sent successfully.' });
  } catch (error) {
    console.error('SMTP ERROR DETAILS:', {
      message: error.message,
      code: error.code,
      command: error.command
    });
    
    // We return a 500 here so the frontend can catch that the email specifically failed
    return res.status(500).json({ 
      success: false,
      error: 'Failed to send email.', 
      details: error.message 
    });
  }
}
