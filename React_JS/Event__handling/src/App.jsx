import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [Form, setForm] = useState("harry")
  const [name, setname] = useState("sushant")
  const [Form, setForm] = useState({ email: 'sushan@', phone: '34987580' })
  const handleClick = () => {
    alert("Hey I am Clicked")
  }

  const handleMouse = () => {
    alert("Mouse id hovered")
  }
  const handleChange =async (e) => {
    setname(e.target.current.value)
    console.log(e)
  }
  const handleemail = (e) => {
    // setForm(e.target.value)
    setForm({...Form,[e.target.name]:e.target.value})
    console.log(Form)

  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>click me</button>
      </div>
      <div className="red" onMouseOver={handleMouse}>Hey I am a Red box</div>

      <input type="text" value={name} onChange={handleChange} />

      <input type="text" name="email" value={Form.email} onChange={handleemail} />


      <input type="text" name="phone" value={Form.phone} onChange={handleemail} />

    </>
  )
}

export default App
