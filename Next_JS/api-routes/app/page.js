"use client"
import Image from "next/image";

export default function Home() {
  let data ={
    name:"sushant",
    role:"Coder"
  }
  const handleClick = async()=>{
    let a = await fetch("/api/add",{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data),
  })
  let res= await a.json()
    console.log("response: ",res)
  
  }
  return (
    <div>
      <h1 className="text-xl">Next.js api routes Demo</h1>
      <button onClick={handleClick}>Route api</button>
    </div>
  );
}
