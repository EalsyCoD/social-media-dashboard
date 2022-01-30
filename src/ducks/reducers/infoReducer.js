const initialState = {
    accounts: [],
    overview: [],
  }
  const infoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INIT-INFO-ACCOUNTS':
        return { ...state, accounts: action.payload }
      case 'INIT-INFO-OVERVIEW':
        return { ...state, overview: action.payload }
      default:
        return state
    }
  }
  
  export default infoReducer