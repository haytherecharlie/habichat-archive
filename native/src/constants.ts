export const emailFunction =
  // __DEV__
  //   ? { url: 'http://localhost:5000/habichat-75c78/us-central1/api/signin/email', method: 'POST' }
  //   :
  {
    url: 'https://us-central1-habichat-75c78.cloudfunctions.net/api/signin/email',
    method: 'POST'
  }

export const verifyFunction =
  // __DEV__
  //   ? { url: 'http://localhost:5000/habichat-75c78/us-central1/api/signin/verify', method: 'POST' }
  //   :
  {
    url: 'https://us-central1-habichat-75c78.cloudfunctions.net/api/signin/verify',
    method: 'POST'
  }
