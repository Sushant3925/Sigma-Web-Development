import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //this usestate is used for conditional Rendering
  const [showbtn, setBtn] = useState(false)

  //Extracting list in code
  const [todos,settodo]= useState([
    {
      title:"Hii",
      desc:"How are you"
    },
    {
      title:"Congrats",
      desc:"For Your success"
    },
    {
      title:"Hello",
      desc:"Nice to meet you"
    }
  ]);
// const Todo = ({todo})=>{return (
//     <>
//       <div className="Todos m-4 border border-purple-800 bg-orange-500 text-black font-bold">
//         <div>{todo.title}</div>
//         <div>{todo.desc}</div>
//       </div>
//     </>
//   )}
  return (
    <>
      <div >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* button is used for conditional Rendering */}

      {showbtn ?<button>Showbtn is true </button>:
        <button>Showbtn is false </button>}

      <div className="card ">
        {/* button is displayed only after ShowBtn has true state */}
        {/* {showbtn && <button>Showbtn is shown </button>} */}

        <button onClick={() => setBtn(!showbtn)}>
          Toggle <button></button> {showbtn}
        </button>
        {todos.map(todo=>{
            // return <Todo todo={todo}/>
            return  <div key={todo.title} className="Todos m-4 border border-purple-800 bg-orange-500 text-black font-bold rounded-full">
            <div>{todo.title}</div>
            <div>{todo.desc}</div>
          </div>
          })}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
