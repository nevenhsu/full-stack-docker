import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from 'store/configureStore'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from 'theme/ThemeProvider'
import App from './App'
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
