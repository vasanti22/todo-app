import React, {useState} from 'react'

export const EditTodo = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = (e) => {
      e.preventDefault()
      editTodo(value, task.id);
      setValue("")
    }
    return (
      <form className='todoform' onSubmit={handleSubmit}>
          <input type='text' className='todoinput' placeholder='Update Task' value={value} onChange={(e) => setValue(e.target.value)} />
          <button type='submit' className='todobtn'>Update</button>
      </form>
    )
}
