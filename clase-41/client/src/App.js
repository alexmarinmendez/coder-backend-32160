import { useState } from "react"
import axios from 'axios'

const App = () => {
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })

  const handleInputChange = (evt) => {
    setInput(prev => ({...prev, [evt.target.name]: evt.target.value}))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      let result = await axios('http://localhost:8080/users', {
        method: 'POST',
        data: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1>Registrar un nuevo usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input name="first_name" value={input.first_name}  onChange={handleInputChange} />
          <label>Apellidos</label>
          <input name="last_name" value={input.last_name}  onChange={handleInputChange} />
          <label>Email</label>
          <input name="email" value={input.email}  onChange={handleInputChange} />
          <input type="submit" />
        </div>
      </form>
    </>
  )
}

export default App