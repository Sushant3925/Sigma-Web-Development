import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cards, setcards] = useState([])

  const fetchData =async()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log("receiving data...")
    let data = await a.json()
    setcards(data)
    console.log(data)
  }

  useEffect(() => {
   fetchData()
   console.log("data is received")
  }, [])
  
  return (
    <>
     <div className="container">
      {
        cards.map((cards)=>{
         return <div key={cards.id} className="card">
            <h2>{cards.title}</h2>
            <p>{cards.body}</p>
            <span>BY:UserId: {cards.userId}</span>
        </div>
        })
      }
      
     </div>
    </>
  )
}

export default App
