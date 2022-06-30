import React, { useContext, useState, useEffect } from 'react';

const GardenContext = React.createContext();

export function useGardenContext() {
  return useContext(GardenContext)
}

const GardenProvider = ({children}) => {
  const [ gardenState, setGardenState ] = useState({});

  useEffect(() => {
    setGardenState({...gardenState, setGardenState })
  }, [])



  return (
    <GardenContext.Provider value={gardenState}>
        {children}
    </GardenContext.Provider>
  )

}

export default GardenProvider;
