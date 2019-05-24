import { createStore } from 'redux'
import { SET_NAME, DID_CHEAT, SET_ANSWERS } from './actions'

const initialState = { qname: '', cheat: false, userAns: [], correctAns: [] }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT':
      return { ...state, ...action.payload }
    case SET_NAME:
      return { ...state, qname: action.payload }
    case DID_CHEAT:
      return { ...state, cheat: action.payload }
    case SET_ANSWERS:
      return {
        ...state,
        userAns: action.payload.userAns,
        correctAns: action.payload.correctAns,
      }
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

export default store
