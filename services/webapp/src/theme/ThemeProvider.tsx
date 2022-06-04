import React, { useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAppSelector } from 'store/hooks'
import { selectMode } from 'store/slices/userDefault'
import { getDesignTokens } from './palette'

function Provider(props: React.PropsWithChildren<any>) {
    const { children } = props

    const mode = useAppSelector(selectMode)
    const theme = useMemo(
        () =>
            createTheme({
                palette: getDesignTokens(mode),
            }),
        [mode]
    )

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default Provider
