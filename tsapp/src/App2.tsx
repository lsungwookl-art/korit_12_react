import HelloComponent from './HelloComponenet'
import { useState } from 'react';
import './App.css'


function App() {
  const [age, setAge] = useState(0);
  setAge('ten');
  return (
    <>
      <HelloComponent name='김영' />
    </>
  )
}

export default App