import React from 'react'

function ClickCounter({ count, increment }) {
    return (
        <div>
            <h2 onClick={increment}>Count : {count} Times</h2>
        </div>
    )
}

export default ClickCounter
