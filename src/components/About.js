import React, {useContext} from 'react'
import appContext from '../contexts/appContext'

const About = () => {
    const {message} = useContext(appContext)
    return (
        <div>
            <h1>This is About us Page</h1>
            <p>{message}</p>
        </div>
    )
}

export default About
