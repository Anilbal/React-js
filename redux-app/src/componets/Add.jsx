import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'


const Add = () => {
    const [input,setInput]=useState("")
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Enter your todo..' 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Add