const aws = require("aws-sdk");
const fs = require("fs");
const path = require("path");

// Add your AWS credentials here
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || "us-west-2"
});

// Load AWS SES
const ses = new aws.SES({ apiVersion: "2010-12-01" });
// Target email address
const to = ["info@brightside-security.com"];
// Sender email
const from = "info@brightside-security.com";

const handler = (req, res) => {
  const body = req.body || {};
  console.log("Contact Form Submission:", body);

  const saveLeadToLog = (note) => {
    try {
      const logEntry = `[${new Date().toISOString()}] CONTACT MESSAGE (${note}) -> info@brightside-security.com:\n` +
        `Name: ${body.name || "N/A"}\n` +
        `Phone: ${body.number || "N/A"}\n` +
        `Email: ${body.email || "N/A"}\n` +
        `Message: ${body.message || "N/A"}\n` +
        `-----------------------------------------\n`;
      fs.appendFileSync(path.join(__dirname, "../leads.log"), logEntry);
    } catch (e) {
      console.error("Could not write to leads.log:", e.message);
    }
  };

  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    console.warn("AWS credentials missing in environment. Email not sent.");
    saveLeadToLog("AWS credentials missing");
    return res.status(200).send({
      status: "success",
      note: "Contact message saved locally (AWS credentials not configured)"
    });
  }

  ses.sendEmail(
    {
      Source: from,
      Destination: { ToAddresses: to },
      Message: {
        Subject: {
          Data: `[Contact Form] New Message from ${body.name || "Website Lead"} - Bright Side Security, INC`
        },
        Body: {
          Text: {
            Data: `
Hello Admin, 

You've got a new contact form submission from your website Bright Side Security, INC. 

Here are the details:

Name: ${body.name || "N/A"}
Phone Number: ${body.number || "N/A"}
Email: ${body.email || "N/A"}
Message: ${body.message || "N/A"}

Thank you!
            `
          }
        }
      }
    },
    (err, data) => {
      if (err) {
        console.error("AWS SES Error (update AWS credentials in .env.local):", err.message);
        saveLeadToLog("SES Error: " + err.message);

        if (process.env.NODE_ENV !== "production") {
          return res.status(200).send({
            status: "success",
            note: "Message captured in leads.log (SES returned: " + err.message + ")",
            data: { MessageId: "dev-simulated-id" }
          });
        }
        res.status(500).send({ status: "error", error: err.message });
      } else {
        console.log("AWS SES Success:", data);
        saveLeadToLog("Sent via SES");
        res.status(200).send({ status: "success", data });
      }
    }
  );
};

module.exports = handler;
module.exports.default = handler;
