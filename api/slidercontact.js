const aws = require("aws-sdk");

// Add your AWS credentials here
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || "us-west-2"
});

// Load AWS SES
const ses = new aws.SES({ apiVersion: "2010-12-01" });
// Add your email address here
const to = ["info@brightside-security.com"];
// Also add your email address as the sender
// Must belong to a verified SES account
const from = "info@brightside-security.com";

export default (req, res) => {
  const body = req.body;
  console.log(body);
  ses.sendEmail(
    {
      Source: from,
      Destination: { ToAddresses: to },
      Message: {
        Subject: {
          Data: `[New Lead] You got a new lead from your website Bright Side Security.`
        },
        Body: {
          Text: {
            Data: `
              Hello Admin, 

              You've got a new contact form submission from your website. 

              Here are the details.

              Name: ${body.name}

              Phone Number: ${body.number}
              
              Email: ${body.email}

              Service : ${body.service}

              Thank you!
                `
          }
        }
      }
    },
    (err, data) => {
      if (err) {
        res.send({ status: "error" });
      } else {
        res.send({ status: "success" });
      }
    }
  );
};
