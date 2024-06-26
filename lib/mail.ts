import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationMail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm you email",
    html: `<p>Click <a href=${confirmLink}>here</a> to confirm your email!</p>`,
  });

  //   if (error) {
  //     return res.status(400).json(error);
  //   }

  //   res.status(200).json(data);
};
