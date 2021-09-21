import React from 'react'

function HoverCounter({count, incrementCount}) {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button type="button" onMouseOver={incrementCount}>Hover</button>
        </div>
    )
}

export default HoverCounter
