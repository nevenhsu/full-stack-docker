import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.scss'

function App() {
    return (
        <div className="App">
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
                                <p>
                                    Edit <code>src/App.tsx</code> and save to
                                    reload.
                                </p>
                                <li>
                                    <Link
                                        style={{ color: '#61dafb' }}
                                        to="/info"
                                    >
                                        Go to info
                                    </Link>
                                </li>
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
                                <p>
                                    Edit <code>src/App.tsx</code> and save to
                                    reload.
                                </p>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ marginBottom: 24 }}
                                >
                                    Learn React!!
                                </a>

                                <li style={{ color: '#61dafb' }}>
                                    <Link style={{ color: '#61dafb' }} to="/">
                                        Go back
                                    </Link>
                                </li>
                            </header>
                        )}
                    />
                </Switch>
            </>
        </div>
    )
}

export default App
