import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue=()=>{
    if(count>=20){
      return count
    }
    setCount(count+1)
  }
  const removeValue=()=>{
    if(count<=0){
      return count
    }
    setCount(count-1)
  }
  return (
    <>

      <h1>Counter app React</h1>
      <p>My Counter: {count}</p>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
