import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export const runtime = 'nodejs';
// GoDaddy Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtpout.secureserver.net', // GoDaddy SMTP server
    port: 465, // SSL port (or use 587 for TLS)
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your full GoDaddy email address
      pass: process.env.EMAIL_PASS, // Your email password
    },
    tls: {
      // Do not fail on invalid certs (for some GoDaddy configurations)
      rejectUnauthorized: false
    }
  });
};

export async function GET() {
  return Response.json({ message: "Hello from Lambda!" })
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, message } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    // Format the appointment date
    const appointmentDate = date ? new Date(date).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : 'Not specified';

    // Email to company (your GoDaddy email)
    const companyEmailOptions = {
      from: `"Athena Spa & Bodybar" <${process.env.EMAIL_USER}>`, // Proper display name
      to: process.env.COMPANY_EMAIL,
      replyTo: `"${name}" <${email}>`, // Customer's name and email for easy reply
      subject: `🌸 New Spa Booking Request - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Spa Booking Request</title>
          <!--[if mso]>
          <noscript>
            <xml>
              <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          </noscript>
          <![endif]-->
          <style>
            @media only screen and (max-width: 600px) {
              .container { width: 100% !important; margin: 0 !important; border-radius: 0 !important; }
              .header { padding: 20px 15px !important; }
              .content { padding: 20px 15px !important; }
              .header h1 { font-size: 24px !important; }
              .header p { font-size: 14px !important; }
              .section-title { font-size: 18px !important; }
              .detail-table td { padding: 8px 0 !important; font-size: 14px !important; }
              .detail-label { width: 35% !important; }
              .action-box { padding: 15px !important; }
              .footer-info { font-size: 12px !important; line-height: 1.5 !important; }
            }
            @media only screen and (max-width: 480px) {
              .header h1 { font-size: 22px !important; }
              .detail-table { display: block !important; }
              .detail-table tr { display: block !important; margin-bottom: 10px !important; border-bottom: 1px solid #fce7f3 !important; padding-bottom: 10px !important; }
              .detail-table td { display: block !important; width: 100% !important; padding: 2px 0 !important; }
              .detail-label { font-weight: bold !important; color: #be185d !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 20px; background-color: #f8fafc; font-family: 'Georgia', 'Times New Roman', serif;">
          <div class="container" style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%); border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(236, 72, 153, 0.1);">
            
            <!-- Header -->
            <div class="header" style="background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                ✨ New Spa Booking Request
              </h1>
              <p style="color: #fce7f3; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
                Athena Spa & Bodybar - Premium Wellness Sanctuary
              </p>
            </div>
            
            <!-- Content -->
            <div class="content" style="padding: 40px 30px;">
              
              <!-- Priority Alert -->
              <div style="background: linear-gradient(135deg, #fef7ff 0%, #fdf2f8 100%); border: 2px solid #ec4899; border-radius: 12px; padding: 20px; margin-bottom: 30px; text-align: center;">
                <h2 style="color: #be185d; margin: 0 0 10px 0; font-size: 18px;">🔔 Priority Booking Alert</h2>
                <p style="color: #6b7280; margin: 0; font-size: 14px;">
                  New customer inquiry received at ${new Date().toLocaleString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  })}
                </p>
              </div>
    
              <!-- Customer Details -->
              <h2 class="section-title" style="color: #be185d; margin-bottom: 25px; font-size: 22px; border-bottom: 2px solid #fce7f3; padding-bottom: 10px;">
                👤 Customer Details
              </h2>
              
              <div style="background: white; border-radius: 12px; padding: 25px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.08); border: 1px solid #fce7f3;">
                <table class="detail-table" style="width: 100%; border-collapse: collapse;">
                  <tr style="border-bottom: 1px solid #fce7f3;">
                    <td class="detail-label" style="padding: 12px 0; font-weight: bold; color: #be185d; width: 30%; vertical-align: top;">
                      👤 Full Name:
                    </td>
                    <td style="padding: 12px 0; color: #374151; font-weight: 600;">
                      ${name}
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #fce7f3;">
                    <td class="detail-label" style="padding: 12px 0; font-weight: bold; color: #be185d; vertical-align: top;">
                      📧 Email:
                    </td>
                    <td style="padding: 12px 0; color: #374151;">
                      <a href="mailto:${email}" style="color: #ec4899; text-decoration: none; font-weight: 500;">
                        ${email}
                      </a>
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #fce7f3;">
                    <td class="detail-label" style="padding: 12px 0; font-weight: bold; color: #be185d; vertical-align: top;">
                      📱 Phone:
                    </td>
                    <td style="padding: 12px 0; color: #374151;">
                      <a href="tel:${phone}" style="color: #ec4899; text-decoration: none; font-weight: 600; font-size: 16px;">
                        ${phone}
                      </a>
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #fce7f3;">
                    <td class="detail-label" style="padding: 12px 0; font-weight: bold; color: #be185d; vertical-align: top;">
                      🌸 Preferred Service:
                    </td>
                    <td style="padding: 12px 0; color: #374151; font-weight: 500;">
                      ${service || '<em style="color: #9ca3af;">Not specified - requires consultation</em>'}
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #fce7f3;">
                    <td class="detail-label" style="padding: 12px 0; font-weight: bold; color: #be185d; vertical-align: top;">
                      📅 Preferred Date:
                    </td>
                    <td style="padding: 12px 0; color: #374151; font-weight: 500;">
                      ${appointmentDate}
                    </td>
                  </tr>
                  <tr>
                    <td class="detail-label" style="padding: 12px 0; font-weight: bold; color: #be185d; vertical-align: top;">
                      💬 Special Requests:
                    </td>
                    <td style="padding: 12px 0; color: #374151; line-height: 1.5;">
                      ${message || '<em style="color: #9ca3af;">No additional message provided</em>'}
                    </td>
                  </tr>
                </table>
              </div>
    
              <!-- Action Items -->
              <div class="action-box" style="background: linear-gradient(135deg, #fef7ff 0%, #fdf2f8 100%); border-left: 4px solid #ec4899; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h3 style="margin: 0 0 15px 0; color: #be185d; font-weight: bold; font-size: 18px;">
                  ⏰ Immediate Action Required
                </h3>
                <ul style="margin: 0; color: #6b7280; line-height: 1.7; padding-left: 20px;">
                  <li><strong>Contact ${name}</strong> within 24 hours at <strong style="color: #ec4899;">${phone}</strong></li>
                  <li>Confirm appointment date and preferred time slot</li>
                  <li>Discuss service requirements and any health considerations</li>
                  <li>Send booking confirmation and preparation instructions</li>
                </ul>
              </div>
    
              <!-- Quick Actions -->
              <div style="text-align: center; margin: 30px 0; padding: 20px; background: white; border-radius: 10px; border: 1px solid #fce7f3;">
                <h3 style="color: #be185d; margin: 0 0 15px 0;">Quick Actions</h3>
                <div style="display: inline-block; margin: 0 10px;">
                  <a href="tel:${phone}" style="display: inline-block; background: linear-gradient(135deg, #ec4899, #f43f5e); color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 14px; margin: 5px;">
                    📞 Call Now
                  </a>
                </div>
                <div style="display: inline-block; margin: 0 10px;">
                  <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #8b5cf6, #a855f7); color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 14px; margin: 5px;">
                    📧 Reply
                  </a>
                </div>
              </div>
    
              <!-- Footer -->
              <div style="text-align: center; margin-top: 40px; padding-top: 25px; border-top: 2px solid #fce7f3;">
                <div style="background: white; padding: 20px; border-radius: 10px; border: 1px solid #fce7f3;">
                  <h4 style="color: #be185d; margin: 0 0 15px 0;">Athena Spa & Bodybar</h4>
                  <p class="footer-info" style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                    📍 F-143, Azad Marg, Bagdiya Bhawan, C-Scheme, Jaipur<br>
                    📞 0141-4564860 | +91-9660099463<br>
                    🌐 AthenabodyBar.com | 📧 bookings@athenabodybar.com<br>
                    🕒 Daily: 9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Confirmation email to customer
    const customerEmailOptions = {
      from: `"Athena Spa & Bodybar" <${process.env.EMAIL_USER}>`, // Proper display name
      to: email,
      replyTo: process.env.EMAIL_USER,
      subject: '🌸 Your Spa Booking Request Received - Athena Spa & Bodybar',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Booking Confirmation - Athena Spa</title>
          <style>
            @media only screen and (max-width: 600px) {
              .container { width: 100% !important; margin: 0 !important; border-radius: 0 !important; }
              .header { padding: 20px 15px !important; }
              .content { padding: 20px 15px !important; }
              .header h1 { font-size: 24px !important; }
              .header p { font-size: 14px !important; }
              .summary-item { display: block !important; margin-bottom: 15px !important; padding: 15px !important; }
              .contact-grid { display: block !important; }
              .contact-item { display: block !important; margin-bottom: 15px !important; }
            }
            @media only screen and (max-width: 480px) {
              .header h1 { font-size: 22px !important; }
              .section-title { font-size: 18px !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 20px; background-color: #f8fafc; font-family: 'Georgia', 'Times New Roman', serif;">
          <div class="container" style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%); border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(236, 72, 153, 0.1);">
            
            <!-- Header -->
            <div class="header" style="background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                ✨ Thank You, ${name}!
              </h1>
              <p style="color: #fce7f3; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
                Your wellness journey awaits at Athena Spa
              </p>
            </div>
            
            <!-- Content -->
            <div class="content" style="padding: 40px 30px;">
              
              <!-- Confirmation Message -->
              <div style="text-align: center; background: linear-gradient(135deg, #fef7ff 0%, #fdf2f8 100%); border: 2px solid #ec4899; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <h2 style="color: #be185d; margin: 0 0 15px 0; font-size: 22px;">🙏 Booking Request Received</h2>
                <p style="color: #374151; line-height: 1.6; margin: 0; font-size: 16px;">
                  We've received your spa booking request and are excited to welcome you to our tranquil sanctuary. 
                  Our wellness team will contact you within <strong style="color: #ec4899;">24 hours</strong> to confirm your appointment details.
                </p>
              </div>
    
              <!-- Booking Summary -->
              <h2 style="color: #be185d; margin-bottom: 20px; font-size: 20px; border-bottom: 2px solid #fce7f3; padding-bottom: 10px;">
                📋 Your Booking Summary
              </h2>
              
              <div style="background: white; border-radius: 12px; padding: 25px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.08); border: 1px solid #fce7f3;">
                <div class="summary-item" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #fce7f3;">
                  <span style="font-weight: bold; color: #be185d;">🌸 Service:</span>
                  <span style="color: #374151; text-align: right;">${service || 'To be discussed during consultation'}</span>
                </div>
                <div class="summary-item" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0;
                              border-bottom: 1px solid #fce7f3;">
              <span style="font-weight: bold; color: #be185d;">📅 Preferred Date:</span>
              <span style="color: #374151; text-align: right;">${appointmentDate}</span>
            </div>
            <div class="summary-item" style="display: flex; justify-content: space-between; align-items: flex-start; padding: 12px 0;">
              <span style="font-weight: bold; color: #be185d;">💬 Your Message:</span>
              <span style="color: #374151; text-align: right; max-width: 60%;">${message || 'No additional notes provided'}</span>
            </div>
          </div>

          <!-- What Happens Next -->
          <div style="background: linear-gradient(135deg, #fef7ff 0%, #fdf2f8 100%); border-left: 4px solid #ec4899; padding: 25px; border-radius: 12px; margin: 30px 0;">
            <h3 style="color: #be185d; margin: 0 0 15px 0; font-size: 18px;">🌿 What Happens Next?</h3>
            <ul style="margin: 0; color: #6b7280; line-height: 1.7; padding-left: 20px;">
              <li><strong>Within 24 hours:</strong> Our wellness consultant will call you at <strong style="color: #ec4899;">${phone}</strong></li>
              <li><strong>Consultation:</strong> We'll discuss your wellness goals and customize your experience</li>
              <li><strong>Confirmation:</strong> Receive your official booking confirmation with preparation tips</li>
              <li><strong>Your Visit:</strong> Enjoy a transformative spa experience at our sanctuary</li>
            </ul>
          </div>

          <!-- Special Preparation Tips -->
          <div style="background: white; border-radius: 12px; padding: 25px; margin: 25px 0; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.08); border: 1px solid #fce7f3;">
            <h3 style="color: #be185d; margin: 0 0 20px 0; font-size: 18px; text-align: center;">✨ Prepare for Your Spa Experience</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;" class="tips-grid">
              <div style="text-align: center; padding: 15px;">
                <div style="background: linear-gradient(135deg, #fdf2f8, #fce7f3); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-size: 20px;">🧘</div>
                <h4 style="color: #be185d; margin: 0 0 8px 0; font-size: 14px;">Arrive Relaxed</h4>
                <p style="color: #6b7280; margin: 0; font-size: 13px; line-height: 1.4;">Come 15 minutes early to settle into our peaceful environment</p>
              </div>
              <div style="text-align: center; padding: 15px;">
                <div style="background: linear-gradient(135deg, #fdf2f8, #fce7f3); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-size: 20px;">💧</div>
                <h4 style="color: #be185d; margin: 0 0 8px 0; font-size: 14px;">Stay Hydrated</h4>
                <p style="color: #6b7280; margin: 0; font-size: 13px; line-height: 1.4;">Drink plenty of water before and after your treatment</p>
              </div>
              <div style="text-align: center; padding: 15px;">
                <div style="background: linear-gradient(135deg, #fdf2f8, #fce7f3); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-size: 20px;">🍃</div>
                <h4 style="color: #be185d; margin: 0 0 8px 0; font-size: 14px;">Light Meals</h4>
                <p style="color: #6b7280; margin: 0; font-size: 13px; line-height: 1.4;">Avoid heavy meals 2 hours before your appointment</p>
              </div>
              <div style="text-align: center; padding: 15px;">
                <div style="background: linear-gradient(135deg, #fdf2f8, #fce7f3); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-size: 20px;">📱</div>
                <h4 style="color: #be185d; margin: 0 0 8px 0; font-size: 14px;">Digital Detox</h4>
                <p style="color: #6b7280; margin: 0; font-size: 13px; line-height: 1.4;">We encourage leaving devices aside for full relaxation</p>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div style="background: white; border-radius: 12px; padding: 25px; margin: 25px 0; text-align: center; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.08); border: 1px solid #fce7f3;">
            <h3 style="color: #be185d; margin: 0 0 20px 0; font-size: 18px;">📞 Need to Reach Us?</h3>
            <div class="contact-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; text-align: center;">
              <div class="contact-item" style="padding: 15px; background: linear-gradient(135deg, #fdf2f8, #fce7f3); border-radius: 10px;">
                <div style="font-size: 24px; margin-bottom: 8px;">📞</div>
                <div style="color: #be185d; font-weight: bold; margin-bottom: 5px;">Call Us</div>
                <a href="tel:01414564860" style="color: #ec4899; text-decoration: none; font-weight: 600; display: block;">0141-4564860</a>
                <a href="tel:+919660099463" style="color: #ec4899; text-decoration: none; font-weight: 600; display: block;">+91-9660099463</a>
              </div>
              <div class="contact-item" style="padding: 15px; background: linear-gradient(135deg, #fdf2f8, #fce7f3); border-radius: 10px;">
                <div style="font-size: 24px; margin-bottom: 8px;">📧</div>
                <div style="color: #be185d; font-weight: bold; margin-bottom: 5px;">Email Us</div>
                <a href="mailto:bookings@athenabodybar.com" style="color: #ec4899; text-decoration: none; font-weight: 600;">bookings@athenabodybar.com</a>
              </div>
            </div>
          </div>

          <!-- Location & Hours -->
          <div style="background: linear-gradient(135deg, #fef7ff 0%, #fdf2f8 100%); border-radius: 12px; padding: 25px; margin: 25px 0; text-align: center;">
            <h3 style="color: #be185d; margin: 0 0 20px 0; font-size: 18px;">🏛️ Visit Our Sanctuary</h3>
            <div style="color: #374151; line-height: 1.6;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">
                📍 F-143, Azad Marg, Bagdiya Bhawan<br>
                C-Scheme, Jaipur, Rajasthan
              </p>
              <p style="margin: 10px 0; color: #6b7280;">
                🕒 <strong>Daily Hours:</strong> 9:00 AM - 9:00 PM
              </p>
              <p style="margin: 10px 0; color: #6b7280; font-size: 14px;">
                🌐 Visit us online: <a href="http://www.AthenabodyBar.com" style="color: #ec4899; text-decoration: none;">AthenabodyBar.com</a>
              </p>
            </div>
          </div>

          <!-- Social Proof -->
          <div style="text-align: center; background: white; border-radius: 12px; padding: 25px; margin: 25px 0; border: 1px solid #fce7f3;">
            <h4 style="color: #be185d; margin: 0 0 15px 0;">🌟 Why Choose Athena Spa?</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; text-align: center;">
              <div style="padding: 10px;">
                <div style="font-size: 20px; margin-bottom: 5px;">✨</div>
                <div style="color: #374151; font-size: 13px; font-weight: 600;">Premium Natural Products</div>
              </div>
              <div style="padding: 10px;">
                <div style="font-size: 20px; margin-bottom: 5px;">🏆</div>
                <div style="color: #374151; font-size: 13px; font-weight: 600;">Expert Therapists</div>
              </div>
              <div style="padding: 10px;">
                <div style="font-size: 20px; margin-bottom: 5px;">🌿</div>
                <div style="color: #374151; font-size: 13px; font-weight: 600;">Holistic Wellness</div>
              </div>
              <div style="padding: 10px;">
                <div style="font-size: 20px; margin-bottom: 5px;">🏛️</div>
                <div style="color: #374151; font-size: 13px; font-weight: 600;">Luxury Environment</div>
              </div>
            </div>
          </div>

          <!-- Final Thank You -->
          <div style="text-align: center; margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%); border-radius: 12px; color: white;">
            <h3 style="margin: 0 0 10px 0; font-size: 18px;">🙏 Thank You for Choosing Athena Spa</h3>
            <p style="margin: 0; font-size: 14px; opacity: 0.9; line-height: 1.5;">
              We're honored to be part of your wellness journey and look forward to providing you 
              with an exceptional spa experience that rejuvenates your body, mind, and spirit.
            </p>
          </div>

          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #fce7f3;">
            <p style="margin: 0; color: #9ca3af; font-size: 12px; line-height: 1.5;">
              This is an automated confirmation. Please do not reply to this email.<br>
              For inquiries, contact us directly at bookings@athenabodybar.com or call 0141-4564860
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile Responsive Styles -->
      <style>
        @media only screen and (max-width: 600px) {
          .tips-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      </style>
    </body>
    </html>
  `,
};

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyEmailOptions),
      transporter.sendMail(customerEmailOptions)
    ]);
    console.log("Email sent successfully");

    return NextResponse.json({
      success: true,
      message: 'Booking request sent successfully! We will contact you within 24 hours.'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request. Please try again or call us directly at 0141-4564860.' },
      { status: 500 }
    );
  }
}