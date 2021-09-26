import React from 'react'
import Counter from './Counter'
import HoverCounter from './HoverCounter'

function Content({theme}) {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
            {(count, increment)=>(
            <HoverCounter count={count} increment={increment} theme={theme}/>
          )}
            </Counter>
        </div>
    )
}

export default Content
