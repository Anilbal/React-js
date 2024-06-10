import React from 'react'
import './App.css'
import Add from './componets/Add'
import Todos from './componets/Todos'
const App = () => {
  return (
    <>
      <h1>Redux toolkit </h1>
      <Add/>
      <Todos/>
    </>
  )
}

export default App