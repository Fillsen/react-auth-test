const initState = {
  user: {},
  auth: false
}

// Action Types
const ActionType = {
  SET_USER: 'SET_USER',
  SET_LOGOUT: 'SET_LOGOUT',
}

// Reducer
export default function userReducer(state = initState, action) {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
        auth: true
      }
    case ActionType.SET_LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        user: action.payload,
        auth: false
      }
    default:
      return state
  }
}

// Action Creator
export const UserAction = {
  setUser: (user) => {
    return {
      type: ActionType.SET_USER,
      payload: user
    }
  },
  setLogout: (user) => {
    localStorage.removeItem('token')
    return {
      type: ActionType.SET_LOGOUT,
      payload: user
    }
  }
}