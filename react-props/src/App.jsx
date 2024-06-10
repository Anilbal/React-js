import React from 'react'
import "./App.css"
import Card from './components/Card'
const App = () => {
  
  return (
    <div>
      <h1 className=' mb-5'>React props with tailwind</h1>
      <Card username="Anil" btnText="Visit" />
      <Card username="Shijal"/>
    </div>
  )
}

export default App