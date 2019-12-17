import nodemailer from 'nodemailer'

class Notification {
  transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'welcome@habi.chat',
      pass: '5X3FkbUztPkF'
    }
  })

  sendVerificationEmail = (email: String, code: String) => {
    return this.transporter.sendMail({
      from: 'welcome@habi.chat',
      to: email,
      subject: `Your Habichat Verification code`,
      replyTo: 'welcome@habi.chat',
      html: `Your code is: ${code}`
    })
  }
}

export default new Notification()