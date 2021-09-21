import { useState } from 'react';

function Counter({render}) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    }
    return (
        render(count, incrementCount)
    )
}

export default Counter
