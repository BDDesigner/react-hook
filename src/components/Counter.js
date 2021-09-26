import { useState } from 'react';

function Counter({children}) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    }
    return (
        children(count, incrementCount)
    )
}

export default Counter
