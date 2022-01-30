import axios from 'axios'

const initAccounts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/accounts')
      dispatch({
        type: 'INIT-INFO-ACCOUNTS',
        payload: res.data,
      })
    } catch (err) {}
  }
}

const initOverview = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/overview')
      dispatch({
        type: 'INIT-INFO-OVERVIEW',
        payload: res.data,
      })
    } catch (err) {}
  }
}

export { initAccounts, initOverview }