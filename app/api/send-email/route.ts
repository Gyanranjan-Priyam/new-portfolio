import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force Node.js runtime for this route (Vercel only)
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'contact.gyanranjan@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; 
                line-height: 1.6; 
                color: #333; 
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
              }
              .container { 
                max-width: 650px; 
                margin: 40px auto; 
                background: white;
              }
              .logo-section {
                padding: 30px 40px 20px 40px;
                background: white;
                text-align: center;
              }
              .logo-section img {
                height: 80px;
                display: block;
                margin: 0 auto;                pointer-events: none;
                user-select: none;              }
              .header { 
                padding: 20px 40px 30px 40px;
                background: white;
                border-bottom: 1px solid #e0e0e0;
              }
              .header h1 { 
                margin: 0 0 15px 0; 
                font-size: 28px;
                font-weight: 600;
                color: #1a1a1a;
              }
              .header p { 
                margin: 8px 0;
                font-size: 15px;
                color: #333;
              }
              .content { 
                padding: 30px 40px;
                background: white;
              }
              .field { 
                margin-bottom: 20px;
              }
              .label { 
                font-weight: 600; 
                color: #1a1a1a;
                margin-bottom: 8px;
                font-size: 14px;
              }
              .value { 
                background: #fafafa;
                padding: 12px 15px;
                border: 1px solid #e0e0e0;
                border-radius: 4px;
                font-size: 15px;
                color: #333;
              }
              .value a {
                color: #0078d4;
                text-decoration: none;
              }
              .value a:hover {
                text-decoration: underline;
              }
              .footer { 
                padding: 25px 40px;
                background: #f8f9fa;
                border-top: 1px solid #e0e0e0;
              }
              .footer-logo {
                margin-bottom: 15px;
                text-align: center;
              }
              .footer-logo img {
                height: 36px;
                margin: 0 auto;
                pointer-events: none;
                user-select: none;
              }
              .footer p {
                margin: 5px 0;
                color: #6c757d;
                font-size: 13px;
              }
              .footer-link {
                color: #6c757d;
                text-decoration: none;
                font-size: 13px;
              }
              .footer-link:hover {
                text-decoration: underline;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="logo-section">
                <img src="${process.env.NEXT_PUBLIC_SITE_URL || 'https://gyanranjanpriyam.tech'}/logo.png" alt="Priyam's Portfolio Logo">
              </div>
              
              <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>You have received a new message from your portfolio website.</p>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">From</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              
              <div class="footer">
                <div class="footer-logo">
                  <img src="${process.env.NEXT_PUBLIC_SITE_URL || 'https://gyanranjanpriyam.tech'}/logo.png" alt="Gyan Ranjan Portfolio Logo">
                </div>
                <p><a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://gyanranjanpriyam.tech'}" class="footer-link">Visit Portfolio</a></p>
                <p>This email was automatically generated from your portfolio contact form</p>
                <p>Received on ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}
Message: ${message}

Received on ${new Date().toLocaleString()}
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
