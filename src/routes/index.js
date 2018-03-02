import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import { Game } from './components'
import Template from '../containers/Template'
import Home from '../components/Home'
import Profile from '../components/Profile'

const Router = () => (
<BrowserRouter>
  <div>
    <Route exact path="/" component={ Home }/>
    <Route path="/profile" component={ Profile }/>
  </div>
</BrowserRouter>)

export default Router
