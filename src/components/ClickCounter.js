import React from 'react'

function ClickCounter({count, incrementCount}) {
    return (
        <div>
            <h1 onClick={incrementCount}>Click: {count} Times</h1>
        </div>
    )
}

export default ClickCounter
