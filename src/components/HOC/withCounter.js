import { useState } from 'react';

function withCounter (Majed) {
    function NewComponent () {
        const [count, setCount] = useState(0);
        const increment = () => {
            setCount(count+1);
        }

        
        return <Majed count={count} increment={increment} />
        
    }

    return NewComponent;
}

export default withCounter;


