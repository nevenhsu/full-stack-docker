import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        // ... rest of your reducers
    })
export default createRootReducer

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>
