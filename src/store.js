import { createStore, combineReducers, applyMiddleware } from 'redux'
import infoReducer from './ducks/reducers/infoReducer'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    info: infoReducer,
  })

  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


  export default store