import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Home from '../screens/home'
import PrivateRoute from '../utils/privateRoute'
import Header from '../components/header'
import Favorite from '../screens/favorite'
import Search from '../screens/search'
import Counter from '../screens/counter'
import Film from '../screens/film'

const Routes = () => {
  return (
    <Router>
   <Header></Header>   
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/favorite' component={Favorite} />
        <Route path='/search' component={Search} />
        <Route path='/counter' component={Counter} />
        <Route path='/film' component={Film} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
