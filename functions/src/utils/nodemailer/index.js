import nodemailer from 'nodemailer'

const configuration = {
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'welcome@habi.chat',
    pass: '5X3FkbUztPkF'
  }
}

export const sendVerificationEmail = (email, pin) => {
  const { user } = configuration.auth
  return nodemailer.createTransport(configuration).sendMail({
    from: user,
    to: email,
    subject: `Your Habichat Verification Pin`,
    replyTo: user,
    html: `Your pin is: ${pin}`
  })
}
