const defaultState = {
  cards: [],
}

// Action Types
const ActionType = {
  SET_CARDS: 'SET_CARDS',
  ADD_CARD: 'ADD_CARD',
  DELETE_CARD: 'DELETE_CARD'
}

// Reducer
export default function cardsReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionType.SET_CARDS:
      return {
        ...state,
        cards: action.payload,
      }
    case ActionType.ADD_CARD:
      return {
        ...state,
        cards: action.payload,
      }
    case ActionType.DELETE_CARD:
      return {
        ...state,
        cards: action.payload,
      }
    default:
      return state
  }
}

// Action Creator
export const CardAction = {
  setCards: (cards) => {
    return {
      type: ActionType.SET_CARDS,
      payload: cards
    }
  },
  addCard: (card) => {
    return {
      type: ActionType.ADD_CARD,
      payload: card
    }
  },
  delCard: (card) => {
    return {
      type: ActionType.DELETE_CARD,
      payload: card
    }
  },
}