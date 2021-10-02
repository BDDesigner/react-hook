import React, { useEffect, useRef } from 'react';
import Input from './Input';

const Form = () => {

    const inputRef = useRef(null);

    useEffect(()=>{
        console.log(inputRef);
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <Input ref={inputRef} type="text" placeholder="Enter Name" />
        </div>
    )
}

export default Form
