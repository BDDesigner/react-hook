import React from 'react';
import useWindowResize from './hooks/useWindowResize';

const LayoutComponentOne = () => {

    const resizeWindow = useWindowResize(768);

    return (
        <div>
            <h2>You The Are Browsing on {resizeWindow ? 'Small' : 'Large'} Scrren.</h2>
        </div>
    )
}

export default LayoutComponentOne
