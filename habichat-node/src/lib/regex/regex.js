const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&;:]{8,}$/
export const validatePassword = password => {
  if (!regexPassword.test(password)) throw { code: 400, message: 'Invalid Password' }
  return true
}

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const validateEmail = email => {
  if (!regexEmail.test(email)) throw { code: 400, message: 'Invalid Email Address' }
  return email
}

const regexPhone = /^1([0-9]{10})$/ // 15196579849
export const validatePhone = phone => {
  if (!regexPhone.test(phone)) throw { code: 400, message: 'Invalid Phone Number' }
  return phone
}
