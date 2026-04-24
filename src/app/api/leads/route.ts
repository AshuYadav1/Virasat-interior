import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * API Route to capture leads and send email notifications.
 * Sends an alert to the Admin and a Thank You email to the Customer.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, city } = body;

    // Validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, Email, and Phone are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send Email to Admin (Lead Notification)
    const adminMailPromise = transporter.sendMail({
      from: `"Virasat Lead System" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Lead: ${name} - ${city}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1A1A1A;">
          <h2 style="color: #B05B4B;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>City:</strong> ${city}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="font-size: 12px; color: #777;">Sent from Virasat Interiors Website</p>
        </div>
      `,
    });

    // 2. Send Thank You Email to Customer
    const customerMailPromise = transporter.sendMail({
      from: `"Virasat Interiors" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting Virasat Interiors`,
      html: `
        <div style="font-family: sans-serif; padding: 40px; color: #1A1A1A; line-height: 1.6;">
          <h1 style="color: #B05B4B; font-size: 24px;">Hello ${name},</h1>
          <p>Thank you for reaching out to **Virasat Interiors**. We have received your inquiry for your project in **${city}**.</p>
          <p>Our lead designer will review your details and contact you within the next 24 hours to schedule your free consultation.</p>
          <br />
          <p>In the meantime, feel free to explore our latest projects on our website.</p>
          <p>Best Regards,<br /><strong>Team Virasat Interiors</strong></p>
        </div>
      `,
    });

    // Wait for both emails to be sent
    await Promise.all([adminMailPromise, customerMailPromise]);

    return NextResponse.json({ success: true, message: "Emails sent successfully!" });
  } catch (error: any) {
    console.error("Email API error:", error);
    return NextResponse.json(
      { error: "Failed to send emails. Please check backend logs." },
      { status: 500 }
    );
  }
}
