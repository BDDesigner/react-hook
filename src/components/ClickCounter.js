import React from 'react'

function ClickCounter({count, incrementCount}) {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button type="button" onClick={incrementCount}>Click</button>
        </div>
    )
}

export default ClickCounter
