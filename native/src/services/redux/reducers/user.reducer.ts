import { Action } from 'interfaces'

const defaultState = {
  firstName: 'Charlie',
  lastName: 'Hay',
  nickName: 'Haytrix',
  icon: `🦧`,
  email: 'charlie.hay@outlook.com',
  joined: '01/09/2019'
}

const userReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default userReducer
