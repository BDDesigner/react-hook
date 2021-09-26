import React from 'react';

function HoverCounter({ count, increment, theme }) {
    const style = theme === 'dark' ? {backgroundColor: '#000', color: '#fff'} : {backgroundColor:'green', color:'#fff'}
    return (
        <div>
            <h2 onMouseOver={increment} style={style}>Hover {count} Times</h2>
        </div>
    )
}

export default HoverCounter
