const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

// Mail is sent directly through the Hostinger mailbox over SMTP.
const to = process.env.MAIL_TO || "info@brightside-security.com";
const user = process.env.SMTP_USER || "info@brightside-security.com";
const pass = process.env.SMTP_PASS || "";
const port = Number(process.env.SMTP_PORT) || 465;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port,
  secure: port === 465,
  auth: { user, pass }
});

const saveLeadToLog = (title, note, text) => {
  try {
    const entry = `[${new Date().toISOString()}] ${title} (${note}) -> ${to}:\n${text}\n-----------------------------------------\n`;
    fs.appendFileSync(path.join(__dirname, "../leads.log"), entry);
  } catch (e) {
    console.error("Could not write to leads.log:", e.message);
  }
};

// Sends a form submission to the company inbox and answers the HTTP request.
const sendLead = ({ res, title, subject, text, replyTo }) => {
  if (!pass) {
    console.warn("SMTP_PASS missing in environment. Email not sent.");
    saveLeadToLog(title, "SMTP not configured", text);
    if (process.env.NODE_ENV === "production") {
      return res.status(500).send({ status: "error", error: "Email is not configured" });
    }
    return res.status(200).send({
      status: "success",
      note: "Message saved locally (SMTP not configured)"
    });
  }

  transporter.sendMail(
    {
      from: `"Bright Side Security, INC Website" <${user}>`,
      to,
      replyTo,
      subject,
      text
    },
    (err, info) => {
      if (err) {
        console.error("SMTP Error:", err.message);
        saveLeadToLog(title, "SMTP Error: " + err.message, text);
        return res.status(500).send({ status: "error", error: err.message });
      }
      saveLeadToLog(title, "Sent via SMTP", text);
      res.status(200).send({ status: "success", data: { MessageId: info.messageId } });
    }
  );
};

module.exports = { sendLead };
