import React, { useEffect, useState } from 'react'

const Mycomponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());

    const addClick = () => {
        setCount(count + 1);
    }

    useEffect(() =>{
        console.log('useEffect rendering');
        document.title = `Click ${count} Times`;
    }, [count]);

    const trick = () => {
        setDate(new Date());
    }

    useEffect(() =>{
        console.log('date render');
        const intervel = setInterval(trick, 1000);

        return () => {
            clearInterval(intervel);
        }
    }, []);

    return (
        <div>
            <input type="text" value={text} onChange={(e) =>setText(e.target.value)} /> <br/> <br/>
            <button type="button" onClick={addClick}>Click</button>
            <h1> {date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Mycomponent
