import nodemailer from 'nodemailer'
import config from 'config'

const transporter = nodemailer.createTransport(config.zoho)

export const sendVerificationEmail = (email, pin) => {
  const { user } = config.zoho.auth
  return transporter.sendMail({
    from: user,
    to: email,
    subject: `Your Habichat Verification Pin`,
    replyTo: user,
    html: `Your pin is: ${pin}`
  })
}
