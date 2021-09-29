import React from 'react'
import DataProvider from '../contexts/DataProvider'

const Nati = () => {
    return (
        <div>
            <h1>Nati Component</h1>
            <DataProvider.Consumer>
                {
                    ({nati})=>(
                        <p> {nati}</p> 
                    )
                }
            </DataProvider.Consumer>
        </div>
    )
}

export default Nati
