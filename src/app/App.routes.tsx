import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home/Home.controller'

export const AppRoutes = ({ location }: any) => (
  <Switch location={location}>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
)
