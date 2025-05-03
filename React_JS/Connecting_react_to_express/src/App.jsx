import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const [count, setCount] = useState(0)
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()


  const delay = (d) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res()
      }, d * 1000);
    })
  }
  const onsubmit = async (data) => {
    // await delay(2) //Simulating network delay
    let r = await fetch("http://localhost:3000/post",{method:"POST", headers:{"Content-type":"application/json",},body:JSON.stringify(data)})
    let res = await r.text()
    console.log(data,res)
    // if (data.username !== "Shubham") {
    //   setError("myform", { message: "Username is Invalid" })
    // }
    // if (data.username === "rohan") {
    //   setError("blocked", {message: "this user is blocked"})
    // }
  }
  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onsubmit)}>
          <input type="text" {...register("username", { required: true, minLength: { value: 3, message: "Username should have more than 3 character" }, maxLength: { value: 8, message: "Username should not have more than 8 character" } })} />
          {errors.username && <div className='red'>
            {errors.username.message}</div>}
          <br /> <input type="password" {...register("password", { required: true, minLength: { value: 8, message: "Username should  haveat least 8 character" }, maxLength: { value: 10, message: "Username should not have 10 character" } })} />
          {errors.password && <div className='red'>
            {errors.password.message}</div>}

          <br /> <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className='red'>
            {errors.myform.message}</div>}
          {errors.blocked && <div className='red'>
            {errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
