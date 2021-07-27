import * as React from 'react'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app/App.controller'
import { configureStore } from './app/App.store'
import { unregister } from './serviceWorker'

export const store = configureStore({})

ReactGA.initialize('UA-180076760-1')

export const Root = () => {
  return (
      <>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
      </>
  )
}

unregister()
