import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'
import type { PaletteMode } from '@mui/material'

interface UserDefaultState {
    mode: PaletteMode
}

const initialState = {
    mode: 'light',
} as UserDefaultState

export const userDefault = createSlice({
    name: 'userDefault',
    initialState,
    reducers: {
        toggleMode: (state, action: PayloadAction<void>) => {
            const { mode } = state
            state.mode = mode === 'light' ? 'dark' : 'light'
        },
    },
})

export const { toggleMode } = userDefault.actions
export const selectMode = (state: RootState) => state.userDefault.mode
