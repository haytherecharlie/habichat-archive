const options = (method, more) => ({
  mode: 'cors',
  method,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzAyMjgwNTJ9.dOnJtiNbZTsGKxms4DC30EocvTY4XgoWOnLq-bKl23Q"
  },
  ...more
})

export default options
