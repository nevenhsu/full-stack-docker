import React, { useEffect, useContext } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { ThemeContext, ActionType } from 'theme/ThemeProvider'
import { makeStyles } from '@material-ui/core/styles'
import tempApi from 'services/tempApi'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MuiLink from '@material-ui/core/Link'
import logo from './logo.svg'
import './App.scss'

const useStyles = makeStyles((theme) => ({
    app: {
        textAlign: 'center',
        backgroundColor: theme.palette.background.default,
    },
}))

function App() {
    const [, dispatch] = useContext(ThemeContext)
    const classes = useStyles()

    const handleToggle = () => {
        dispatch({ type: ActionType.Toggle })
    }

    useEffect(() => {
        tempApi
            .greet()
            .then((str) => console.log(str))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className={classes.app}>
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
        </div>
    )
}

export default App
