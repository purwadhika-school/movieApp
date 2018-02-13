import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { 
  FETCH_DATA,
  FETCH_MOVIES_ONE
} from '../actions/index'



export const data = (state = {
  items: '',
}, action) => {
  switch (action.type){
    case `${FETCH_DATA}`: 
      return {
        ...state,
        items: 'This is data from redux'
      }

    default: 
      return state
  }
}


export const moviesOne = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type){
    case `${FETCH_MOVIES_ONE}_PENDING`:
      return {
        ...state,
        isFetching: true
      }

    case `${FETCH_MOVIES_ONE}_FULFILLED`:
      return {
        ...state,
        items: action.payload,
        isFetching: false
      }

    case `${FETCH_MOVIES_ONE}_REJECTED`:
      return {
        ...state,
        isFetching: false
      }

    default:
      return state
  }
}


const rootReducer = combineReducers({
  data,
  moviesOne
})

export default rootReducer
