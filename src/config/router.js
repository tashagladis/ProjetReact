import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../screens/login'
import Home from '../screens/home'
import Characters from '../screens/characters'

import PrivateRoute from '../utils/privateRoute'
import Header from '../components/header'
import Favorite from '../screens/favorite'
import Search from '../screens/search'

const Routes = () => {
  return (
    <Router>
      <Header></Header> 
      <Switch>
     
        <Route path='/home' component={Home} />
        <Route path='/favorite' component={Favorite} />
        <Route path='/characters/:id' component={Characters} />
        <Route path='/search' component={Search} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
