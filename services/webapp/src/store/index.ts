import { configureStore } from '@reduxjs/toolkit'
import createRootReducer from './reducers'

export const store = configureStore({
    reducer: createRootReducer(),
    preloadedState: {},
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
