import React, { useEffect, useRef, useState } from 'react';

const Time = () => {
    const [date, setDate]= useState(new Date());

    const buttonRef = useRef();
    const updateTime =() => {
        setDate(new Date());
    }

    useEffect(()=>{
        buttonRef.current = setInterval(updateTime, 1000);
        return ()=>{
            clearInterval(buttonRef.current);
        }
    }, []);

    return (
        <div>
            <h2>It is {date.toLocaleTimeString()} Clock</h2>
            <button type="button" onClick={() =>clearInterval(buttonRef.current)}>Cleanup</button>
        </div>
    )
}

export default Time
