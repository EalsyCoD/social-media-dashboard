import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import {initAccounts, initOverview} from './ducks/actions/infoAction'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initAccounts())
    dispatch(initOverview())
  },[dispatch])

 return  <div className="App">social-media-dashboard</div>
  }



export default App;
