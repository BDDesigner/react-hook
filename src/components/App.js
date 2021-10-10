import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AppState from '../contexts/AppState'
import About from './About'
import Home from './Home'


const App = () => {

  return (
    <>
      <h1>Context Api Example</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <AppState>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </AppState>
      </Router>
    </>
  )
}

export default App
