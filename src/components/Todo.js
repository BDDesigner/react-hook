import React, { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [waring, setWaring] = useState(null);

    const inputHandle = (e) => {
        const inputValue = e.target.value;
        const updateWaring = inputValue.includes('.js') ? 'You Need to know Javascript Skill' : null;

        setTodo(inputValue);
        setWaring(updateWaring);
    }

    return (
        <div>
            <h1> {todo} </h1>
            <input type="text" value={todo} placeholder="Type...." onChange={inputHandle} />
            <hr />
            <h2>{waring || 'Good Choose !'}</h2>
        </div>
    )
}

export default Todo
