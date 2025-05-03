// import Image from "next/image";
"use client"
import { submitAction } from "./Action/form";
import { useRef } from "react";
export default function Home() {
  let ref = useRef()
  return (
   <div className="container w-2/3 mx-auto my-[140px]">
    <form ref={ref} action={(e)=>{(submitAction(e)); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Enter Username</label>
          <input className="text-black px-2 py-1 my-2 "  type="text" name="name" />
        </div>
        <div>
          <label htmlFor="name">Enter Password</label>
          <input className="text-black px-2 py-1 my-2 " type="password" name="pass" />
        </div>
        <div className="submit ml-[200px]">
          <button className="border border-sky-200 p-2 rounded-full bg-blue-500 font-bold" >Submit</button>
        </div>
    </form>
   </div>
  );
}
