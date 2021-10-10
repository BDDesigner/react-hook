
import { useCallback, useEffect, useState } from 'react';

const useWindowResize = (windowSize) => {
    const [screenSize, setScreenSize] = useState(false);

    const checkScreenSize = useCallback(() => {
        setScreenSize(window.innerWidth < windowSize )
    }, [windowSize])

    useEffect(() => {

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);

    }, [checkScreenSize])

    return screenSize;
}

export default useWindowResize
