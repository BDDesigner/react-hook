import React, {useEffect, useRef} from 'react'

const Form = () => {

    const inputRef = useRef();

    useEffect(()=>{
        console.log(inputRef);
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter Your Name" />
        </div>
    )
}

export default Form
