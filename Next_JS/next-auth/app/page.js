"use client"
import {useSession,signIn,signOut} from "next-auth/react"
import SessionWrapper from "./camponent/sessionWrapper"
export default function Camponent(){
  const {data : session} = useSession()
  if(session)
  {
    return<>
      Signed in as {session.user.email} <br/>
      <button onClick={()=>signOut()}>Sign Out</button>
    </>
  }
  return<>
      Not signed in <br/>
      <button onClick={()=>signIn()}>Sign Out</button>
    </>
}