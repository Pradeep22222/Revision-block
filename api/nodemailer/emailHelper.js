const emailHelper = async (body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    let info = await transporter.sendMail(body);
  } catch (error) {
    console.log(error);
  }
};
export const emailVerificationEmail = (emailData) => {
  const body = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: `${emailData.email}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body}
  };
  return emailHelper(body);
};
