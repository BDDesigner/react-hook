import React, { useReducer } from 'react';
import '../App.css';
import CounterContext from '../contexts/CounterContext';
import ComponentA from './ComponentA';

const initialState = 0
const reducer = ( state, action ) => {
    switch ( action ) {
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        default :
            return state
    }
}

const App = () => {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <div>
          <CounterContext.Provider value={ { count:count, countDispatch: dispatch } }>
            <ComponentA />
          </CounterContext.Provider>
        </div>
    </div>
  )
}

export default App
