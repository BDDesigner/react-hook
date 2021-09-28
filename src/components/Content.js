import React from 'react'
import ThemeContext from '../contexts/ThemeContext'
import Counter from './Counter'
import HoverCounter from './HoverCounter'

function Content() {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
            {(count, increment)=>(
                <ThemeContext.Consumer>
                    {({theme})=>(
                        <HoverCounter count={count} increment={increment} theme={theme}/>
                    )}
                </ThemeContext.Consumer>
            )}
            </Counter>
        </div>
    )
}

export default Content
