import React, {
    useMemo,
    createContext,
    useContext,
    useReducer,
    Dispatch,
    Props,
} from 'react'
import {
    ThemeProvider,
    createMuiTheme,
    ThemeOptions,
} from '@material-ui/core/styles'
import lightTheme from './light'
import darkTheme from './dark'

export enum ActionType {
    Toggle = 'TOGGLE',
}

type ThemeState = {
    type: 'light' | 'dark'
}

type ThemeAction = { type: ActionType.Toggle }

const initialState: ThemeState = {
    type: 'light',
}

function reducer(state: ThemeState, action: ThemeAction): ThemeState {
    switch (action.type) {
        case ActionType.Toggle: {
            return {
                ...state,
                type: state.type === 'light' ? 'dark' : 'light',
            }
        }
        default:
            return state
    }
}

export const ThemeContext = createContext<[ThemeState, Dispatch<ThemeAction>]>([
    initialState,
    () => null,
])

function Themed(props: Props<any>) {
    const { children } = props
    const [{ type }] = useContext(ThemeContext)

    const theme: ThemeOptions = useMemo(
        () => (type === 'light' ? lightTheme : darkTheme),
        [type]
    )
    const muiTheme = createMuiTheme(theme)

    return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
}

function Provider(props: Props<any>) {
    const themeRedux = useReducer(reducer, initialState)

    return (
        <ThemeContext.Provider value={themeRedux}>
            <Themed {...props} />
        </ThemeContext.Provider>
    )
}

export default Provider
