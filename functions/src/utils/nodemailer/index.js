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

export const sendVerificationEmail = async (email, pin) => {
  try {
    const { user } = configuration.auth
    await nodemailer.createTransport(configuration).sendMail({
      from: user,
      to: email,
      subject: `Your Habichat Verification Pin`,
      replyTo: user,
      html: `Your pin is: ${pin}`
    })
  } catch (err) {
    console.log(err.message)
    throw `Error sending verify code to ${email}`
  }
}
