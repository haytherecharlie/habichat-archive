export const TYPE_NEW_POST = 'TYPE_NEW_POST'
export const SAVE_NEW_POST = 'SAVE_NEW_POST'

export const typeNewPost = (value) => ({
  type: TYPE_NEW_POST,
  value
})

export const saveNewPost = (value) => ({
  type: SAVE_NEW_POST,
  value
})
