import React, {useState} from 'react'

function ClickCounter() {
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button type="button" onClick={increment}>Count</button>
        </div>
    )
}

export default ClickCounter
