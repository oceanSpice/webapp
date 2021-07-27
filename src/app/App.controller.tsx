// import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'

// import { history } from './App.store'
import AppView from './App.view'
import './App.scss'

export const App = () => (
  // <ConnectedRouter history={history}>
    <div className={"appBg"}>
      <AppView />
    </div>
  // </ConnectedRouter>
)
