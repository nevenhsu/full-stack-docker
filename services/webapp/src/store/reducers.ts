import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { userDefault } from './slices/userDefault'

const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        // ... rest of your reducers
        userDefault: userDefault.reducer,
    })
export default createRootReducer

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>
