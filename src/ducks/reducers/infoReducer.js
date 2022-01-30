const initialState = {
    accounts: [],
    overview: [],
}

const infoReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'INIT-ACCOUNTS':
            return {...state, accounts: action.payload}
            case 'INIT-OVERVIEW':
                return {...state, overview: action.payload}
                default: 
                return state
    }
}

export default infoReducer