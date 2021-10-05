import React, { useReducer } from 'react'
import CounterContext from '../contexts/CounterContext'
import ComponentA from './ComponentA'

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

const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <CounterContext.Provider value={ { countDispatch: dispatch, count: count } }>
                <ComponentA />
            </CounterContext.Provider>
        </div>
    )
}

export default CounterThree
