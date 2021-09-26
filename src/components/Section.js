import React from 'react'
import Content from './Content'

function Section({theme}) {
    return (
        <div>
            <h1>This is a Section</h1>
            <Content theme={theme} />
        </div>
    )
}

export default Section
