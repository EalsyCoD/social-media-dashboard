import axios from "axios";


const initAccounts = () => {
    return async dispatch => {
        try{
            const result = await axios.get('/accounts')
            dispatch({
                type:'INIT_ACCOUNTS',
                payload: result.data,
            })
        } catch(err) {}
    }
}

const initOverview = () => {
    return async dispatch => {
        try{
            const result = await axios.get ('/overview')
            dispatch({
                type:'INIT_OVERVIEW',
                payload: result.data,
            })
        }catch(err) {}

    }
}

export {initAccounts, initOverview}