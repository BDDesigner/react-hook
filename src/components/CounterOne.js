import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action)=> {
    switch(action) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        case 'Increment5':
            return state + 5;
        case 'Decrement5':
            return state - 5;
        default:
            return state;
    };
};

const CounterOne = () => {

    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count- { count }</h2>
            <button type="button" onClick={() => dispatch('Increment')} >Increment</button>
            <button type="button" onClick={() => dispatch('Decrement')}>Decrement</button>
            
            <h2>Count2- { count2 }</h2>
            <button type="button" onClick={() => dispatch2('Increment5')} >Increment by 5</button>
            <button type="button" onClick={() => dispatch2('Decrement5')}>Decrement by 5</button>
        </div>
    )
}

export default CounterOne
