import { combineReducers } from '@reduxjs/toolkit'
import { userDefault } from './slices/userDefault'

const createRootReducer = () =>
    combineReducers({
        userDefault: userDefault.reducer,
    })
export default createRootReducer

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>
