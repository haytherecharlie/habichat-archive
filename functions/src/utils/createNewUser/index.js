const createNewUser = (email) => ({
  email,
  firstname: "",
  lastname: "",
  nickname: "",
  picture: "https://firebasestorage.googleapis.com/v0/b/habichat-75c78.appspot.com/o/picture-placeholder.jpg?alt=media&token=752e9043-b607-43a3-bb5d-92d5c25c78db",
  interests: [],
  communities: [],
  created: new Date().getTime()
})

export default createNewUser