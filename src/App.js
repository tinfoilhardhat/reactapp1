import React from 'react'
import Home from './containers/Home'
import TodoList from './containers/TodoList'
import CoolBoxes from './containers/CoolBoxes'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { TeleText } from './containers/Home/styles';
import AboutMe from './containers/AboutMe'
import BTSBoxes from './containers/BTSBoxes'
let username = null;

const App = () => (
  <BrowserRouter basename="HOME">
  
    <div className="App">
      <Switch>
        <Route exact path="/">
          {(username) ? <Home name={username}/> : <Home name="to the site"/>}
        </Route>
        <Route path="/PROJ1" /*component={TodoList}*/>
          <TodoList/>
        </Route>
        <Route path="/PROJ2">
          <CoolBoxes/>
        </Route>
        <Route path="/PROJ3">
          <AboutMe/>
        </Route>
        <Route path="/PROJ4">
          <BTSBoxes/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>

)

export default App
