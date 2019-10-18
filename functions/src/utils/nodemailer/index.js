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

const transporter = nodemailer.createTransport(configuration)

export const sendVerificationEmail = async (email, pin) => {
  console.log('SENDING EMAIL: ', email)
  console.log('SENDING CODE: ', pin)
  const { user } = configuration.auth
  const info = await transporter.sendMail({
    from: user,
    to: email,
    subject: `Your Habichat Verification Pin`,
    replyTo: user,
    html: `Your pin is: ${pin}`
  })
  console.log(info)
}
