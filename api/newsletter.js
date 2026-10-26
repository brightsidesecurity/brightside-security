const Mailchimp = require("mailchimp-api-v3");

// Add your Mailchimp credentials here
const apiKey = process.env.MAILCHIMP_API_KEY || "";
const listId = process.env.MAILCHIMP_LIST_ID || "";
let mailchimp;
if (apiKey) {
  mailchimp = new Mailchimp(apiKey);
}

const handler = (req, res) => {
  const body = req.body || {};

  if (!mailchimp || !listId) {
    console.log("Newsletter signup received:", body.email);
    return res.send({ status: "success", note: "Mailchimp not configured in environment" });
  }

  mailchimp
    .request({
      method: "POST",
      path: "/lists/" + listId + "/members",
      body: {
        email_address: body.email,
        // Set status to "subscribed" to disable double-opt-in
        status: "pending"
      }
    })
    .then(result => {
      res.send({ status: "success" });
    })
    .catch(err => {
      console.error("Mailchimp error:", err);
      res.send({ status: "error" });
    });
};

module.exports = handler;
module.exports.default = handler;
