import React from 'react'
import DataProvider from '../contexts/DataProvider';
import Dada from './Dada';
import Nati from './Nati';
import Poti from './Poti';

const App = () => {

  const msg ={
    dada: {
      phone: '01761334863',
      address: 'Rangpur'
    },
    nati: '02',
    poti: '03'
  }

  return (
    <div>
      <DataProvider.Provider value={msg}>
        <Dada />
        <Nati />
        <Poti />
      </DataProvider.Provider>
    </div>
  )
}

export default App
