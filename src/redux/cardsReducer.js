const initState = {
  cards: {},
}

// Action Types
const ActionType = {
  SET_CARDS: 'SET_CARDS',
  ADD_CARDS: 'ADD_CARDS',
  REMOVE_CARDS: 'REMOVE_CARDS'
}

// Reducer
export default function cardsReducer(state = initState, action) {
  switch (action.type) {
    case ActionType.SET_CARDS:
      return {
        ...state,
        cards: action.payload,
      }
    case ActionType.ADD_CARDS:
      return {
        ...state,
        cards: action.payload,
      }
    case ActionType.REMOVE_CARDS:
      return {
        ...state,
        cards: action.payload,
      }
    default:
      return state
  }
}

// Action Creator
export const UserAction = {
  setCards: (card) => {
    return {
      type: ActionType.SET_CARDS,
      payload: card
    }
  },
  addCards: (card) => {
    return {
      type: ActionType.ADD_CARDS,
      payload: card
    }
  },
  removeCards: (card) => {
    return {
      type: ActionType.REMOVE_CARDS,
      payload: card
    }
  },
}