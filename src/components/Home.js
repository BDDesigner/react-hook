import React, {useContext} from 'react'
import appContext from '../contexts/appContext'

const Home = () => {
    const {message, number, isAust, setIsAust } = useContext(appContext)
    return (
        <div style={{ backgroundColor: isAust ? 'green' : 'red' }}>
            <h1>This is Home Page</h1>
            <p>{`${message} amar phone number is ${number}`}</p>
            {isAust ? <button onClick={() => setIsAust(false)}>Log Out</button> : <button onClick={() => setIsAust(true)}>Log In</button> }
        </div>
    )
}

export default Home
