import React,{useState} from 'react'
import appContext from './appContext'

const AppState = ({children}) => {
    const [isAust, setIsAust] = useState(false)
    return (
        <div>
            <appContext.Provider value= {{
                message: 'This is From The Context API',
                number: "01761334863",
                isAust,
                setIsAust
            }} >
                { children }
            </appContext.Provider>
        </div>
    )
}

export default AppState
