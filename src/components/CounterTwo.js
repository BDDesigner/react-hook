import React, { useReducer } from 'react';

const initialState = {
    counter : 0,
    counter2 : 5
};
const reducer = (state, action) => {
    switch ( action.type ) {
        case ('increment') :
            return { ...state, counter: state.counter + action.value };
        case ('decrement') :
            return { ...state, counter: state.counter - action.value };
        case ('increment2') :
            return { ...state, counter2: state.counter2 + action.value };
        case ('decrement2') :
            return { ...state, counter2: state.counter2 - action.value };
        default :
            return state;
    }
}

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count : { count.counter } </h1>
            <button type="button" onClick={ () => dispatch({ 
                type: 'increment',
                value: 1
            })} >
                increment by one
            </button>

            <button type="button" onClick={ () => dispatch({
                type: 'decrement',
                value: 1
            })} >
                decrement by one
            </button>
            <h1>Count : { count.counter2 } </h1>
            <button type="button" onClick={ () => dispatch({ 
                type: 'increment2',
                value: 5
            })} >
                increment by five
            </button>

            <button type="button" onClick={ () => dispatch({
                type: 'decrement2',
                value: 5
            })} >
                decrement by five
            </button>
        </div>
    )
}

export default CounterTwo
