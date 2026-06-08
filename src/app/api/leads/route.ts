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

    const isUnconfigured = 
      !process.env.EMAIL_USER || 
      !process.env.EMAIL_PASS || 
      process.env.EMAIL_USER.includes("your-email") || 
      process.env.EMAIL_PASS.includes("your-app-password") ||
      !process.env.EMAIL_SERVER;

    if (isUnconfigured) {
      console.warn("⚠️ SMTP credentials are not properly configured. Running in Mock/Development mode.");
      console.log("================= MOCK EMAIL LEAD ==================");
      console.log(`Timestamp: ${new Date().toISOString()}`);
      console.log(`To Admin (${process.env.ADMIN_EMAIL || "admin@virasatinteriors.com"}):`);
      console.log(`  Subject: New Lead: ${name} - ${city}`);
      console.log(`  Body: Phone: ${phone}, Email: ${email}`);
      console.log(`To Customer (${email}):`);
      console.log(`  Subject: Thank you for contacting Virasat Interiors`);
      console.log("====================================================");

      try {
        const fs = require("fs");
        const path = require("path");
        const scratchDir = path.join(process.cwd(), "scratch");
        if (!fs.existsSync(scratchDir)) {
          fs.mkdirSync(scratchDir, { recursive: true });
        }
        const logPath = path.join(scratchDir, "leads_log.json");
        let logs = [];
        if (fs.existsSync(logPath)) {
          try {
            logs = JSON.parse(fs.readFileSync(logPath, "utf-8"));
          } catch (e) {
            logs = [];
          }
        }
        logs.push({
          timestamp: new Date().toISOString(),
          name,
          email,
          phone,
          city,
        });
        fs.writeFileSync(logPath, JSON.stringify(logs, null, 2), "utf-8");
      } catch (err) {
        console.error("Failed to save mock lead log to file:", err);
      }

      return NextResponse.json({ 
        success: true, 
        message: "Lead captured successfully (Mock Mode active)!" 
      });
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
