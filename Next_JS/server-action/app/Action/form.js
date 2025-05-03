"use server"
import fs from "fs/promises"
export const submitAction=async(e)=>{
    console.log(e.get("name"), e.get("pass") )
    fs.appendFile("data.txt",`\nusername: ${e.get("name")}\nPassword: ${e.get("pass")}`)
  }