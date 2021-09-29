import React from 'react'
import DataProvider from '../contexts/DataProvider'

const Dada = () => {
    return (
        <div>
            <h1>Hello Dada </h1>
            <DataProvider.Consumer>
                {
                    ({dada})=>(
                        <>
                        <h1> {dada.phone} </h1>
                        <h1> {dada.address} </h1>
                        </>
                    )
                }
            </DataProvider.Consumer>
        </div>
    )
}

export default Dada
