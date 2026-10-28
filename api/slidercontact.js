const { sendLead } = require("./_mailer");

const handler = (req, res) => {
  const body = req.body || {};

  const text = `
Hello Admin,

You've got a new quote request from your website Bright Side Security, INC.

Here are the details:

Name: ${body.name || "N/A"}
Phone Number: ${body.number || "N/A"}
Email: ${body.email || "N/A"}
Service: ${body.service || "N/A"}

Thank you!
`;

  sendLead({
    res,
    title: "QUOTE REQUEST",
    subject: `[Quote Request] New Quote Request from ${body.name || "Website Lead"} - Bright Side Security, INC`,
    text,
    replyTo: body.email
  });
};

module.exports = handler;
module.exports.default = handler;
