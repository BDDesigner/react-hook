import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function Content() {
    const context = useContext(ThemeContext);
    const {theme} = context;
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
            {(count, increment)=>(
                <HoverCounter 
                    count={count} 
                    increment={increment} 
                    theme={theme} 
                />
            )}
            </Counter>
        </div>
    )
}

export default Content
