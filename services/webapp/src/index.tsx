import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from 'store/configureStore'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from 'theme/ThemeProvider'
import App from './App'
import * as serviceWorker from './serviceWorker'

const store = configureStore({})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <CssBaseline />
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
