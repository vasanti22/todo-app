import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value);
    setValue("")
  }
  return (
    <form className='todoform' onSubmit={handleSubmit}>
        <input type='text' className='todoinput' placeholder='Add Task' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todobtn'>Add</button>
    </form>
  )
}
