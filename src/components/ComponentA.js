import React, { useContext } from 'react'
import CounterContext from '../contexts/CounterContext'



const ComponentA = () => {
    const context = useContext(CounterContext)
    console.log(context);
    return (
        <div>
            <h1>Counter {context.count}</h1>
            <button type="button" onClick={ () => context.countDispatch('increment') }>
                increment
            </button>
            <button type="button" onClick={ () => context.countDispatch('decrement') }>
                decrement
            </button>
        </div>
    )
}

export default ComponentA
