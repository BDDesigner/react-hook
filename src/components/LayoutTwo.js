import React from 'react';
import useWindowResize from './hooks/useWindowResize';

const LayoutTwo = () => {

    const resizeWindow = useWindowResize(600)

    return (
        <div className={resizeWindow ? 'Small' : 'Large'}>
            <h2>You Are Browsing on  Scrren.</h2>
        </div>
    )
}

export default LayoutTwo
