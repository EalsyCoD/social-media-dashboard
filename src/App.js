import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import {initAccounts, initOverview} from './ducks/actions/infoAction'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import Header from './components/Header';

const App = () => {
  const dispatch = useDispatch()
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark:light)
  }

  useEffect(() => {
    dispatch(initAccounts())
    dispatch(initOverview())
  },[dispatch])

 return  (
   <ThemeProvider theme={theme}>
     <GlobalStyle />
     <Header toggleTheme={toggleTheme} />
   </ThemeProvider>
 )
  }

export default App;
