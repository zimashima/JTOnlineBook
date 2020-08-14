import React, { useEffect, useState } from 'react';
import { Home } from './pages'
import './styles.css'

const INTERVAL_TIME = 2000

/** Application entry point */
function App() {

  const [value, setValue] = useState(0)

  /** DO NOT CHANGE THE FUNCTION BELOW */

  useEffect(() => {
    setInterval(() => {
      // Find random bucket of words to highlight
      setValue(Math.floor(Math.random() * 10))
    }, INTERVAL_TIME)
  }, [])

  /** DO NOT CHANGE THE FUNCTION ABOVE */


  return (
    <>
      <Home value={value}/>
    </>
  );
}

export default App;
