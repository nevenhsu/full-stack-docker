import { useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import tempApi from 'services/tempApi'
import { useAppDispatch } from 'store/hooks'
import { toggleMode } from 'store/slices/userDefault'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MuiLink from '@mui/material/Link'
import logo from './logo.svg'
import './App.scss'

const PREFIX = 'App'
const classes = {
    root: `${PREFIX}-root`,
}
const Root = styled('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        textAlign: 'center',
        backgroundColor: theme.palette.background.default,
    },
}))

export default function App() {
    const dispatch = useAppDispatch()
    const handleToggle = () => {
        dispatch(toggleMode())
    }

    useEffect(() => {
        tempApi
            .greet()
            .then((str) => console.log(str))
            .catch((error) => console.log(error))
    }, [])

    return (
        <Root className={classes.root}>
            <>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <header className="App-header">
                                <img
                                    src={logo}
                                    className="App-logo"
                                    alt="logo"
                                />
                                <Typography variant="h5" gutterBottom>
                                    Edit <code>src/App.tsx</code> and save to
                                    reload.
                                </Typography>

                                <div style={{ marginBottom: 24 }}>
                                    <Link
                                        style={{ color: '#61dafb' }}
                                        to="/info"
                                    >
                                        Go to info
                                    </Link>
                                </div>

                                <Button
                                    variant="contained"
                                    onClick={handleToggle}
                                >
                                    Toggle Theme
                                </Button>
                            </header>
                        )}
                    />
                    <Route
                        path="/info"
                        render={() => (
                            <header className="App-header">
                                <img
                                    src={logo}
                                    className="App-logo"
                                    alt="logo"
                                />

                                <Typography variant="h5" gutterBottom>
                                    Edit <code>src/App.tsx</code> and save to
                                    reload.
                                </Typography>

                                <div style={{ marginBottom: 24 }}>
                                    <Link style={{ color: '#61dafb' }} to="/">
                                        Go back
                                    </Link>
                                </div>

                                <MuiLink
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React!!
                                </MuiLink>
                            </header>
                        )}
                    />
                </Switch>
            </>
        </Root>
    )
}
